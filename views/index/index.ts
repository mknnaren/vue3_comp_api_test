import { find, findIndex, cloneDeep } from 'lodash';
import axios from 'axios';
import { defineComponent, reactive, onMounted, ref } from '@nuxtjs/composition-api'
import MovieTable from '~/components/movie/table.vue'
import MovieTablePage from '~/components/movie/page.vue'
import MovieTableSearch from '~/components/movie/search.vue'

interface Movie {
    imdbID: number, Title: string, favourite: boolean, Year: string 
}

export default defineComponent({
    components: {
        MovieTable,
        MovieTablePage,
        MovieTableSearch
    },
    props: {},

    setup( props , context) {
        const movTitle = ref("");
        const page = ref(1);
        const pageData = ref({});
        const loading = ref(true);
        const movieList: any = ref([]);
        const movieData = ref({
            data: [],
            total: 0
        });

        console.log(context.root.$store.state.favData.favList);

        function updateTable(){
            const storedFavList: any[] = cloneDeep(context.root.$store.state.favData.favList);
            let movList: any[] = cloneDeep(movieList.value);
            for (let i = 0; i < movList.length; i++) {
                movList[i]["favourite"] = !!find(storedFavList, { imdbID: movList[i].imdbID });
            }
            movieList.value = movList;
        }


        function getPageMovieList(pageNo: number) {
            page.value = pageNo;
            getMovieList();
        }
        function getSearchResult(searchTxt: string) {
            movTitle.value = searchTxt;
            page.value = 1;
            getMovieList();
        }
        
        function getMovieList() {
            loading.value = true;
            let storedFavList = context.root.$store.state.favData.favList;
            let resData;
            let movieObj;
            axios({
                method: 'get',
                baseURL: "https://jsonmock.hackerrank.com/api/movies/search",
                url: `/?Title=${movTitle.value}&page=${page.value}`,
            })
                .then(response => {
                    console.log(response.data);
                    resData = response.data;
                    resData.page = Number(resData.page);
                    for (let i = 0; i < resData.data.length; i++){
                        movieObj = resData.data[i];
                        resData.data[i]["favourite"] = !!find(storedFavList, { imdbID : movieObj.imdbID });
                    }
                    movieData.value = resData;
                    movieList.value = resData.data;
                    loading.value = false;
                    const { data, ...pageObj } = resData
                    pageData.value = pageObj;
                    console.log(pageData.value);
                }, err => {
                    console.log(err);
                });
        }

        onMounted(() => {
            getMovieList();
        });
        
       
        return {
            getMovieList,
            getPageMovieList,
            getSearchResult,
            updateTable,
            movieData,
            movieList,
            pageData,
            loading
        }
    }
})


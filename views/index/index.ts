import axios from 'axios';
import { defineComponent, computed, useMeta, ref } from '@nuxtjs/composition-api'
import MovieTable from '~/components/movie_table.vue'
import MovieTablePage from '~/components/movie_table_page.vue'

export default defineComponent({
    components: {
        MovieTable,
        MovieTablePage
    },
    props: {},

    setup( props , context) {
        const movTitle = ref("");
        const page = ref(1);
        const pageData = ref({});
        const movieData = ref({
            loading: true,
            data: [],
            total: 0
        });
        function getPageMovieList(pageNo: number) {
            page.value = pageNo;
            getMovieList();
        }
        function getMovieList() {
            movieData.value.loading = true;
            axios({
                method: 'get',
                baseURL: "https://jsonmock.hackerrank.com/api/movies/search",
                url: `/?Title=${movTitle.value}&page=${page.value}`,
            })
                .then(response => {
                    console.log(response.data);
                    response.data.page = Number(response.data.page);
                    movieData.value = response.data;
                    movieData.value.loading = false;
                    const { data, ...pageObj } = response.data
                    pageData.value = pageObj;
                    console.log(pageData.value);
                }, err => {
                    console.log(err);
                });
        }
        
        // const filteredMovieList = computed(function () {
        //     return movieLs.value.filter(
        //         (movieLs) => movieLs.title.includes(movTitle)
        //     );
        // });
        return {
            getMovieList,
            getPageMovieList,
            movieData,
            pageData
        }
    }
})


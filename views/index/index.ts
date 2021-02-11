import axios from 'axios';
import { defineComponent, computed, useMeta, ref } from '@nuxtjs/composition-api'
import MovieTable from '~/components/movie_table.vue'

export default defineComponent({
    components: {
        MovieTable
    },
    props: {},

    setup( props , context) {
        const movTitle = ref("");
        const page = ref("");
        const filteredMovieList = ref([]);
        function getMovieList() {
            axios({
                method: 'get',
                baseURL: "https://jsonmock.hackerrank.com/api/movies/search",
                url: `/?Title=${movTitle.value}&page=${page.value}`,
            })
                .then(response => {
                    console.log(response.data);
                    filteredMovieList.value = response.data.data;
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
            filteredMovieList
        }
    }
})


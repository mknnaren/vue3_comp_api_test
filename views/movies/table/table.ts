// ~ts-ignore
import { defineComponent, computed, useMeta, ref } from '@nuxtjs/composition-api'
import AddToFav from '~/components/movie/add_to_fav.vue'

export default defineComponent({
    emits: ["update-table"],
    components: {
        AddToFav,
    },
    props: {
        movieData: {
            type: Object,
            default: null
        },
        loading: {
            type: Boolean,
            default: false
        },
        movieList: {
            type: Array,
            default: null
        }
    },

    setup({ movieList, movieData}, context) {
        
        console.log(movieData);
        
        const options = ref({});

        const movieHeaders = ref([
            {
                text: 'Title',
                align: 'left',
                sortable: false,
                value: 'Title',
            },
            {
                text: 'Year',
                align: 'start',
                sortable: false,
                value: 'Year',
            },
            {
                text: 'IMDB ID',
                align: 'start',
                sortable: false,
                value: 'imdbID',
            },
            { 
                text: '', 
                value: 'favourite',
                align: 'start',
                sortable: false,
            },
        ]);
        
       
        
        const page = ref(1);
        const itemsPerPage = ref(10);

        function passUpdateTableEvent(){
            context.emit("update-table");
        }
        return {
            movieHeaders,
            options,
            itemsPerPage,
            page,
            passUpdateTableEvent
        }
    }
})

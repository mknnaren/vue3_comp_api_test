            
            
import axios from 'axios';
import { defineComponent, computed, useMeta, ref } from '@nuxtjs/composition-api'

interface User {
    firstName: string
    lastName: string
}

export default defineComponent({
    head: {},
    props: {
        movieData: {
            type: Object,
            default: null
        }
    },

    setup({ movieData}, context) {
        
        console.log(movieData);
        
        const options = ref({});

        const movieHeaders = ref([
            {
                text: 'Title',
                align: 'start',
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
        ]);
        
       
        
        const page = ref(1);
        const itemsPerPage = ref(10);

        
        return {
            movieHeaders,
            options,
            itemsPerPage,
            page
        }
    }
})

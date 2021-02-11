            
            
import axios from 'axios';
import { defineComponent, computed, useMeta, ref } from '@nuxtjs/composition-api'

interface User {
    firstName: string
    lastName: string
}

export default defineComponent({
    head: {},
    props: {
        movieList: {
            type: Array,
            default: null
        }
    },

    setup({ movieList}, context) {
        
        console.log(movieList);
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
        
       
        const desserts = ([
            {
                name: 'KitKat',
                calories: 518,
                fat: 26.0,
                carbs: 65,
                protein: 7,
                iron: '6%',
            },
        ]);
        const movTitle = ref("");
        const page = ref(1);

        
        return {
            movieHeaders
        }
    }
})

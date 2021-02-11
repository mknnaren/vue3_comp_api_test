import { defineComponent, computed, useMeta, ref } from '@nuxtjs/composition-api'

export default defineComponent({
    setup( prop, context) {
        
        console.log(prop);
        
        const favList = ref([]);
        const favHeaders = ref([
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

       
        
        return {
            favHeaders,
            favList
        }
    }
})

import { defineComponent, computed, useMeta, ref } from '@nuxtjs/composition-api'

export default defineComponent({
    emits: ["update-table"],
    props: {
        favListData: {
            type: Array,
            default: null
        }
    },
    setup( prop, context) {
        
        console.log(prop);
        const search = ref("");
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

        function unMarkFav(obj: { imdbID: number, Title: string, favourite: boolean, Year: string }) {
            console.log(obj);
            context.root.$store.commit('favData/removeFav', obj);
            context.emit("update-table");
        }
        
        return {
            favHeaders,
            favList,
            search,
            unMarkFav
        }
    }
})

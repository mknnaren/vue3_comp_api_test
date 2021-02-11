import { defineComponent, ref, computed, useContext} from '@nuxtjs/composition-api'

export default defineComponent({
    // emits: ["show-search-list"],
    props: {
         movieItem: {
            type: Object,
            default: null
        }
    },
    async middleware({ store }) {
        await store.dispatch('getUser');
    },
    setup({movieItem}, context) {
        
        const { app: { store } } = useContext()

        const theme = computed(() => store.state.favData.favList)

        console.log(theme);
        // console.log(store);
        // console.log(store.state.favData.favList);
        
        const addToFavourite = (obj: object) => {
            console.log(obj);
        }
       
        return {
            addToFavourite
        }
    }
})

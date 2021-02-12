import { defineComponent, ref, computed, useContext} from '@nuxtjs/composition-api'

export default defineComponent({
    emits: ["fav-update-table"],
    props: {
         movieItem: {
            type: Object,
            default: null
        }
    },
    
    setup({movieItem}, context) {

        // const { app: { store } } = useContext()

        // const favList = computed(() => store.state.favData.favList)

        // console.log(favList);
        
        // console.log(store);
        // console.log(store.state.favData.favList);
        
        const addToFavourite = (obj: { imdbID: number, Title: string, favourite: boolean, Year: string }) => {
            console.log(obj.favourite);
            if(!obj.favourite){
                context.root.$store.commit('favData/addFav', obj);
            }else{
                context.root.$store.commit('favData/removeFav', obj);
            }
            
            context.emit("fav-update-table");
        }
       
        return {
            addToFavourite
        }
    }
})

import { defineComponent, ref, computed, useContext} from '@nuxtjs/composition-api'
import  favStore  from '~/global_store/favStore'

export default defineComponent({
    emits: ["fav-update-table"],
    props: {
         movieItem: {
            type: Object,
            default: null
        }
    },
    
    setup({movieItem}, context) {

        
        const addToFavourite = (obj: { imdbID: string, Title: string, favourite: boolean, Year: string }) => {
            console.log(obj.favourite);
            if(!obj.favourite){
                favStore.addFav(obj);
            }else{
                favStore.removeFav(obj);
            }
            
            context.emit("fav-update-table");
        }
       
        return {
            addToFavourite
        }
    }
})

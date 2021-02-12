import { defineComponent, computed, onMounted, ref } from '@nuxtjs/composition-api'
import FavouriteTable from '~/components/favourites/table.vue'
import  favStore  from '~/global_store/favStore'

export default defineComponent({
    components: {
        FavouriteTable
    },
    props: {},

    setup( props , context) {
        console.log(favStore.getFavList.value);
        const favListData = favStore.getFavList.value;
        function updateTable(){
            favListData.value = favStore.getFavList.value;
        }

        return {
            updateTable,
            favListData
        }
    }
})


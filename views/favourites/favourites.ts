import { defineComponent, computed, onMounted, ref } from '@nuxtjs/composition-api'
import FavouriteTable from '~/components/favourites/table.vue'

export default defineComponent({
    components: {
        FavouriteTable
    },
    props: {},

    setup( props , context) {
        
        const favListData = context.root.$store.state.favData.favList;
        console.log(favListData);

        function updateTable(){
            favListData.value = context.root.$store.state.favData.favList;
        }

        return {
            updateTable,
            favListData
        }
    }
})


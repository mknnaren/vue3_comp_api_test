import { defineComponent, watch, ref } from '@nuxtjs/composition-api'

export default defineComponent({
    // emits: ["show-search-list"],
    props: {
        
    },

    setup( props, context) {
        
        const searchText = ref("");
        
        function showPageResults(){
            context.emit("show-search-list", searchText.value);
        }
        
        const clearMessage = () => {
            searchText.value = "";
        }
        
        watch(searchText, showPageResults)
        
       
        return {
            searchText,
            showPageResults,
            clearMessage
        }
    }
})

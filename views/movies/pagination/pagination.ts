import { defineComponent, computed, ref } from '@nuxtjs/composition-api'

export default defineComponent({
    emits: ["show-page-list"],
    props: {
        pageData: {
            type: Object,
            default: null
        }
    },

    setup({ pageData}, context) {
        
        console.log(pageData);
        
        const page = ref(1);
        const itemsPerPage = ref(10);
        const pageCount = ref(10);

        function showPageResults(pageNo: Number){
            console.log(pageNo);
            context.emit("show-page-list", pageNo);
        }
        
       
       
        return {
            page,
            itemsPerPage,
            pageCount,
            showPageResults,
            
        }
    }
})

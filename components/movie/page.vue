<template>
<div>
    <div class="text-center pt-2">
        <v-pagination v-model="pageData.page"  @input="showPageResults(pageData.page)" :length="pageData.total_pages"></v-pagination>
        <v-text-field :value="pageData.per_page" label="Items per page" readonly type="number" 
            ></v-text-field>
    </div>
</div>
</template>
<script lang="ts">
import { defineComponent, computed, ref } from '@nuxtjs/composition-api'

export default defineComponent({
    emits: ["show-page-list"],
    props: {
        pageData: {
            type: Object,
            default: {
                page: 1,
                per_page: 10,
                total_pages: 0,
                total: 0
            }
        }
    },
    setup({ pageData }, context) {
        function showPageResults(pageNo: Number){
            console.log(pageNo);
            context.emit("show-page-list", pageNo);
        }
        return {
            showPageResults,
        }
    }
})
</script>

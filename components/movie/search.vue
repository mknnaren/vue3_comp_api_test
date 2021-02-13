<template>
  <div>
    <div class="text-center pt-2">
      <v-text-field
        outlined
        label="Search"
        v-model="searchText"
        @change="showPageResults"
        prepend-inner-icon="mdi-magnify"
        :append-icon="searchText.length > 0 ? 'mdi-close-circle' : ''"
        @click:append="searchText=''"
      ></v-text-field>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, watch, ref } from "@nuxtjs/composition-api";
export default defineComponent({
  emits: ["show-search-list"],
  setup(props, context) {
    const searchText = ref("");
    function showPageResults() {
      context.emit("show-search-list", searchText.value);
    }
    
    watch(searchText, showPageResults);
    return {
      searchText,
      showPageResults
    };
  },
});
</script>

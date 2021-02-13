<template>
<div>
    <v-data-table 
    :headers="movieHeaders" 
    :items="movieList" 
    
    :page.sync="page"
    :items-per-page="itemsPerPage"
    hide-default-footer

    
    :loading="loading"
    class="elevation-1">
    
    <template v-slot:[`item.favourite`]="{ item }">
        <AddToFav :movieItem="item" @fav-update-table="passUpdateTableEvent"></AddToFav>
    </template>
</v-data-table>
</div>

</template>
<script lang="ts">
import { defineComponent, computed, useMeta, ref } from '@nuxtjs/composition-api'
import AddToFav from '~/components/movie/add_to_fav.vue'

export default defineComponent({
    emits: ["update-table"],
    components: {
        AddToFav,
    },
    props: {
        loading: {
            type: Boolean,
            default: false
        },
        movieList: {
            type: Array,
            default: null
        }
    },

    setup({ movieList}, context) {
        const options = ref({});
        const movieHeaders = ref([
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
        const page = ref(1);
        const itemsPerPage = ref(10);

        function passUpdateTableEvent(){
            context.emit("update-table");
        }
        return {
            movieHeaders,
            options,
            itemsPerPage,
            page,
            passUpdateTableEvent
        }
    }
})

</script>

<template>
<div>
    <v-card>
        <v-card-title>
            <v-text-field v-model="search" append-icon="mdi-magnify" label="Search" single-line hide-details></v-text-field>
        </v-card-title>
        <v-data-table :headers="favHeaders" :items="favListData" :search="search" class="elevation-1">
        
            <template v-slot:[`item.favourite`]="{ item }">
                <div @click="unMarkFav(item)">
                <v-icon color="red darken-3">
                    mdi-delete
                </v-icon>
                </div>
            </template>
        
        </v-data-table>
    </v-card>
</div>

</template>
<script lang="ts">
import { defineComponent, computed, useMeta, ref } from '@nuxtjs/composition-api'
import  favStore  from '~/global_store/favStore'
export default defineComponent({
    emits: ["update-table"],
    props: {
        favListData: {
            type: Array,
            default: null
        }
    },
    setup( prop, context) {
        
        console.log(prop);
        const search = ref("");
        const favList = ref([]);
        const favHeaders = ref([
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

        function unMarkFav(obj: { imdbID: string, Title: string, favourite: boolean, Year: string }) {
            console.log(obj);
            favStore.removeFav(obj);
            context.emit("update-table");
        }
        
        return {
            favHeaders,
            favList,
            search,
            unMarkFav
        }
    }
})

</script>

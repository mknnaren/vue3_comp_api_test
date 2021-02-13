<template>
<div>
    <v-card>
        <v-card-title>
            <v-text-field v-model="search" append-icon="mdi-magnify" label="Search" single-line hide-details></v-text-field>
        </v-card-title>
        <v-data-table :headers="favHeaders" :items="favList" :search="search" class="elevation-1">
        
            <template v-slot:[`item.favourite`]="{ item }">
                <div class="rmFavDiv" @click="unMarkFav(item)">
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
    props: {
        favPropList: {
            type: Array,
            default: null
        }
    },
    setup( {favPropList}, context) {
        const favList = computed(() => {
            console.log(!!favPropList);
            if(!!favPropList){
                return favPropList;
            }else{
                return favStore.getFavList.value
            }
        })
        const search = ref("");
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
            favStore.removeFav(obj);
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

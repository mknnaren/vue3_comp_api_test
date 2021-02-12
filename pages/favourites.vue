<template>
    <div>
        <v-row justify="center" align="center">
            <v-col cols="12" sm="8" md="6" >
                <v-card>
                    <v-card-title class="headline">
                        <v-btn small fab color="primary" to="/" class="mr-3">
                        <v-icon>mdi-chevron-left</v-icon>
                        </v-btn>
                        Favourite Movie List 
                        
                        
                    </v-card-title>
                </v-card>
            </v-col>
        </v-row>
        <v-row justify="center" align="center">
            <v-col cols="12" sm="8" md="6">
                <div class="text-center">
                    <FavouriteTable :favListData = "favListData" @update-table="updateTable"></FavouriteTable>
                </div>
            </v-col>
        </v-row>
    </div>
</template>
<script lang="ts">
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
</script>
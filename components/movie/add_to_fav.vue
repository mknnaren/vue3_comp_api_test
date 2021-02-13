<template>
<div id="favStarDiv" ref="favStarRef" @click="addToFavourite(movieItem)">
    <v-icon class="fav-false" v-if="!movieItem.favourite" color="grey lighten-1">
        mdi-star-outline
    </v-icon>
    <v-icon class="fav-true" v-else color="yellow darken-3">
        mdi-star
    </v-icon>
</div>
</template>
<script lang="ts">
import { defineComponent, ref, computed, useContext} from '@nuxtjs/composition-api'
import  favStore  from '~/global_store/favStore'

export default defineComponent({
    emits: ["fav-update-table"],
    props: {
         movieItem: {
            type: Object,
            default: null
        }
    },
    setup({movieItem}, context) {
        const addToFavourite = (obj: { imdbID: string, Title: string, favourite: boolean, Year: string }) => {
            if(!obj.favourite){
                favStore.addFav(obj);
            }else{
                favStore.removeFav(obj);
            }
            context.emit("fav-update-table");
        }
        return {
            addToFavourite
        }
    }
})
</script>

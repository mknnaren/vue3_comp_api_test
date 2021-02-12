<template>
<div @click="addToFavourite(movieItem)">
    <v-icon v-if="!movieItem.favourite" color="grey lighten-1">
        mdi-star-outline
    </v-icon>
    <v-icon v-else color="yellow darken-3">
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
            console.log(obj.favourite);
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

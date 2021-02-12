import { find, findIndex } from 'lodash';
import { computed, ref } from "@nuxtjs/composition-api";

const favList:any = ref([])

function addFav(data:{imdbID: string, Title: string, favourite: boolean, Year: string }) { 
    if (!!!find(favList.value, { imdbID: data.imdbID })){
        favList.value.push(data);
    }
}
function removeFav(data: { imdbID: string, Title: string, favourite: boolean, Year: string }) {
    console.log(data);
    console.log(findIndex(favList.value, { imdbID: data.imdbID }));
    let index = findIndex(favList.value, { imdbID: data.imdbID });
    if (index > -1) {
        favList.value.splice(index, 1);
    }
}
function clearAllFav() {
    favList.value.splice(0, favList.value.length);
}
const getFavList = computed(() => favList.value)

export default {
    addFav,
    removeFav,
    clearAllFav,
    getFavList
} 
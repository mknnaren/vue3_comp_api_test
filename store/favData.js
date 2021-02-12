import { find, findIndex } from 'lodash';
export const state = () => ({
    favList : []
});

export const mutations = {
    addFav (state, data){
        if (!!!find(state.favList, { imdbID: data.imdbID })){
            state.favList.push(data);
        }
    },
    removeFav(state, data) {
        console.log(data);
        console.log(findIndex(state.favList, { imdbID: data.imdbID }));
        let index = findIndex(state.favList, { imdbID: data.imdbID });
        if (index > -1) {
            state.favList.splice(index, 1);
        }
    },
    clearAllFav(state, data) {
        state.favList.splice(0, state.favList.length);
    },

    //    ------------------------------
    clearStorage (state){
        for(const prop in state){
            state[prop] = null;
        }
    }
};

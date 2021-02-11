export const state = () => ({
    favList : [{"test":"name"}]
});

export const mutations = {
    addFav (state, data){
        if (state.favList.indexOf(data) < 0){
            state.favList.push(data);
        }
    },
    removeFav(state, data) {
        // state.favData = data;
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

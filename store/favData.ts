import { find, findIndex } from 'lodash';
export const state = () => ({
    favList : []
});

export const mutations = {
    addFav(state: any, data: { imdbID: number, Title: string, favourite: boolean, Year: string }){
        if (!!!find(state.favList, { imdbID: data.imdbID })){
            state.favList.push(data);
        }
    },
    removeFav(state: any, data: { imdbID: number, Title: string, favourite: boolean, Year: string }) {
        console.log(data);
        console.log(findIndex(state.favList, { imdbID: data.imdbID }));
        let index = findIndex(state.favList, { imdbID: data.imdbID });
        if (index > -1) {
            state.favList.splice(index, 1);
        }
    },
    clearAllFav(state: any, data: { imdbID: number, Title: string, favourite: boolean, Year: string }) {
        state.favList.splice(0, state.favList.length);
    },

    //    ------------------------------
    clearStorage (state:any){
        for(const prop in state){
            state[prop] = null;
        }
    }
};

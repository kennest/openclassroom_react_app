const initialState={favoriteFilms:[]};
function toggleFavorite(state=initialState,action){
    let nextState;
    switch(action.type){
        case "TOGGLE_FAVORITE":
            const favoriteFilmIndex=state.favoriteFilms.findIndex(item=>item.id === action.value.id);
            if(favoriteFilmIndex !== -1){
                //suppression
                nextState={
                    ...state,
                    favoriteFilm:state.favoriteFilms.filter((item,index) => index !== favoriteFilmIndex)
                }
            }else{
                //ajouter
                nextState={
                    ...state,
                    favoriteFilm: [...state.favoriteFilms,action.value]
                }
            }
            return nextState || state;
        default:
            return state;
    }
}
export default toggleFavorite
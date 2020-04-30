
import artist from './artist.json';
const INITIAL_STATE={
    searchField:'',
    artists:artist

}

const ArtistReducer=(state=INITIAL_STATE,action)=>
{
    switch(action.type){
        case 'SET_SEARCH_FIELD':
            return{
                ...state,
                searchField:action.payload
            }
        default:
            return state;
    }
}

export default ArtistReducer;
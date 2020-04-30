import ArtistReducer from './artist/artist.reducer';
import {combineReducers} from 'redux';



export default combineReducers({
    artists:ArtistReducer
});
import { combineReducers } from 'redux'

// This will be a static list of songs for our app
const songsReducer = () => {
  return [
    { title: 'No Scrubs', duration: '4:05'},
    { title: 'Macarena', duration: '2:30'},
    { title: 'All Star', duration: '3:15'},
    { title: 'I Want it That Way', duration: '1:45'}
  ]
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === 'SONG_SELECTED') {
    return action.payload;
  }
  // Note that following won't execute, we only have action.type of 'SONG_SELECTED'
  // Coded to help demonstrate convention 
  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer
});
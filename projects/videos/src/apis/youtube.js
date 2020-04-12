import axios from 'axios';
const KEY = 'AIzaSyDXlN6qZycZX4TbJtr6wDhm5GTy_vfFImA';
const youtube = axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3'
})

export { youtube, KEY };

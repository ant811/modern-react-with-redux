import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com/',
  headers: {
    Authorization: 'Client-ID qCmpThif48Y5cWLLGanJnOu0QIlNgukTO2PAPawg9Cw'
  }  
})
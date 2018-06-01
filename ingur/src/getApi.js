
import axios from 'axios';
const API_URL = "https://api.imgur.com/3/gallery/";

export const  getApi = (params)=> dispatch =>{
  console.log(params);
  const url = `${API_URL}top/top?album_previews=true`
  axios.get(url, {
    headers: {
      authorization: "Client-ID 8065ef18f4bf419"
    }
  }).then((response) => {
    dispatch({
      type:'FETCH',
      payload:response.data.data})
  }).catch((error) => {
    console.log(error);
  });
}

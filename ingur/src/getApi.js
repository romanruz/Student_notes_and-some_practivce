
import axios from 'axios';

export const  getApi = ()=> dispatch =>{
  axios.get('https://api.imgur.com/3/gallery/top/top', {
    headers: {
      authorization: "Client-ID 8065ef18f4bf419"
    }
  }).then((response) => {
    // console.log(response.data.data['0']);
    dispatch({
      type:'FETCH',
      payload:response.data.data})
  }).catch((error) => {
    console.log(error);
  });
}

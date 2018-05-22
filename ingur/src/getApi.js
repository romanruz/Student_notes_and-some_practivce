
import axios from 'axios';

export const  getApi = ()=> dispatch =>{
  console.log('here');
  axios.get('https://api.imgur.com/3/gallery/top/top', {
    headers: {
      authorization: "Client-ID 8065ef18f4bf419"
    }
  }).then((response) => {  
    console.log(response);
    dispatch({type:'FETCH',payload:response.data.data})
  }).catch((error) => {
    console.log(error);
  });
}

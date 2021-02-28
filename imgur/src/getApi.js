import axios from 'axios';

const API_URL = "https://api.imgur.com/3/gallery/";

export const getApi = ({section, sort}) => dispatch => {

    const url = `${API_URL}${section}/${sort}?showViral=true`
    axios.get(url, {
        headers: {
            authorization: "Client-ID 8065ef18f4bf419"
        }
    }).then((response) => {
        dispatch({
            type: 'FETCH',
            payload: response.data.data
        })
    }).catch((error) => {
        console.log(error);
    });
}

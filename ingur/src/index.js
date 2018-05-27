import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {Provider} from 'react-redux';
import {createStore,applyMiddleware} from 'redux';
import {fetch} from './reducer';
import axios from 'axios';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';


const store = createStore(fetch,composeWithDevTools(applyMiddleware(thunk)));

// const getApi = ()=>{
//   axios.get('https://api.imgur.com/3/gallery/top/top', {
//     headers: {
//       authorization: "Client-ID 8065ef18f4bf419"
//     }
//   }).then((response) => {
//     store.dispatch({
//       type:'FETCH',
//       payload:response.data.data})
//   }).catch((error) => {
//     console.log(error);
//   });
// }
// getApi();
// store.subscribe(()=>{
// })



ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'));

registerServiceWorker();

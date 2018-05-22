import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {createStore} from 'redux';
import {fetch} from './reduser';
import {getApi} from './getApi';



const store = createStore(fetch);

​dispatch(getApi());
console.log(store.getState());


ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

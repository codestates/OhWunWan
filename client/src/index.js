import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import store from './Ducks/Store/Store'; 
import { Provider } from 'react-redux';
import axios from 'axios';
axios.defaults.withCredentials = true


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
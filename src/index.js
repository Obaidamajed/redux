import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { storeCounter } from './store';
import { Provider } from 'react-redux';

// 3-wrap all app with redux provider
ReactDOM.render(
  <Provider store = {storeCounter}>
    <App />
  </Provider>
  // هيك أنشأنا الريدوكس لكن لسا ما استخدمناه
  ,
  document.getElementById('root')
);


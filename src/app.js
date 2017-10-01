import React from 'react';
import ReactDOM from 'react-dom';
import Ecommerce from './components/ecommerce';
import route from './modules/route';
import configureStore from './configureStore';
import { Provider } from 'react-redux';

const store = configureStore()
window.store = store
console.log(window.store)

ReactDOM.render(<Provider store={ store }><Ecommerce /></Provider>,
    document.getElementById('app'));
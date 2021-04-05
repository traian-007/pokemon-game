import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux'
import store from './store'

import App from "./App.js"

import './index.css';

// import { createStore } from 'redux'
// import rootReducer from './store/counter'


// const store = new createStore(rootReducer)
// console.log('####: store', store.getState())
// store.subscribe(() => console.log('####: store subscribe', store.getState()));
// const { plusAction, minusAction } = bindActionCreators(actions, store.dispatch);

// plusAction(5)
// minusAction(2)
// plusAction(7)

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
    , document.getElementById('root'));


import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import {combineReducers, createStore} from "redux";

import App from './App';

const userReducer = ((state = {users: []}, action) => {
    switch (action.type) {
        case 'LOAD_USERS':
            state = {users: action.payload}
            return {...state}
    }

    return state

});

const postReducer = ((state = {posts: []}, action) => {
    switch (action.type) {
        case 'LOAD_POSTS':
            state = {posts: action.payload}
            return{...state}
    }

    return state

})





let reducer = combineReducers({
    userReducer, //userReducer: userReducer
    postReducer
});
let store = createStore(reducer)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <Provider store={store}>
    <BrowserRouter>
        <App/>
    </BrowserRouter>
    </Provider>

);


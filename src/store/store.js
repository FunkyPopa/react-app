import {combineReducers, configureStore} from "@reduxjs/toolkit";

import {postReducer, userReducer} from "./slices";


const rootReducer = combineReducers( {
    userReducer,
    postReducer
})

let store = configureStore({
    reducer: rootReducer
});

export {
    store
}
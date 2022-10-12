import {combineReducers, configureStore} from "@reduxjs/toolkit";

import {carReducer} from "./slices";


const rootReducer = combineReducers({
    carReducer
});

const store = configureStore({
    reducer: rootReducer
});

export {
    store
}
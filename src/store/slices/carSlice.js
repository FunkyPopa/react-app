import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    cars: []
};

const carSlice = createSlice({
    name: 'carSlice',
    initialState,
    reducers: {
        getAll: (state, action) => {
            state.cars = action.payload
        }
    }
});

const {reducer: carReducer, actions: {getAll}} = carSlice;

const carActions = {
    getAll
};

export {
    carReducer,
    carActions
};
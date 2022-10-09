import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    users: [],
    user: null
};

const userSlice = createSlice( {
    name: 'userSlice',
    initialState,
    reducers:{
        getAll:(state, action) => {
            state.users = action.payload
        },
        getCurrentUser: (state, action) => {
            state.user = state.users.find(user => user.id === action.payload)
        }
    }
})

const {reducer: userReducer, actions: {getAll, getCurrentUser}} = userSlice;

const userActions = {
    getAll,
    getCurrentUser
}

export {
    userReducer,
    userActions
}
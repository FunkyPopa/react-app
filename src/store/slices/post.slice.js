import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    posts: [],
    post: null
};

const postSlice = createSlice( {
    name: 'postSlice',
    initialState,
    reducers: {
        getAll: (state, action) => {
            state.posts = action.payload
        },
        getPost: (state, action) => {
            state.post = state.posts.find(post => post.id === action.payload)
        }
    }
});

const {reducer: postReducer, actions: {getAll, getPost}} = postSlice;

const postActions = {
    getAll,
    getPost
}

export {
    postReducer,
    postActions
}
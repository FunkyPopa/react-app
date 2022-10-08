import {useReducer} from "react";


const reducer = (state, action) => {
    switch (action.type) {
        case 'addCat':
            return {
                cats: action.payload
            }
    }
};

const useCatsReducer = () => useReducer(reducer, {cats: []})


export {
    useCatsReducer
}
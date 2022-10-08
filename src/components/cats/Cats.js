import {useCatsReducer} from "../../reducers/CatsReducer";

const Cats = () => {
    const [state, dispatch] = useCatsReducer();
    return(
        <div>
            <h1>CAt: {state.cats}</h1>
            <button onClick={() => dispatch({type: 'addCat', payload: 1})}>Save</button>
        </div>
    )
}

export {
    Cats
}


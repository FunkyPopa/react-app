import {useReducer, useRef} from "react";

import './App.css';

const reducer = (state, action) => {
    switch (action.type) {
        case 'addCat':
            return {...state, cats: [...state.cats, {name: action.payload, id: Date.now()}]}
        case 'addDog':
            return {...state, dogs: [...state.dogs, {name: action.payload, id: Date.now()}]}
        case 'deleteCat':
            return {...state, cats: state.cats.filter(cat => cat.id !== action.payload)}
        case 'deleteDog':
            return {...state, dogs: state.dogs.filter(dog => dog.id !== action.payload)}
        default:
            console.error('error')
            return {...state}
    }
}

function App() {

    const [state, dispatch] = useReducer(reducer, {cats: [], dogs: []});

    const catInput = useRef();
    const dogInput = useRef();

  return (
    <div className="App">
           <div className="catInput">
               <label>Cats name: <input type="text" ref={catInput}/> </label>
               <button onClick={() => dispatch({type: 'addCat', payload: catInput.current.value})}>Save</button>
               {
                   state.cats.map(cat => <div key={cat.id}>
                       {cat.name}
                       <button onClick={() => dispatch({type: 'deleteCat', payload: cat.id})}>Delete</button>
                   </div>)
               }
           </div>

        <div className="dogInput">
            <label>Dog name: <input type="text" ref={dogInput}/> </label>
            <button onClick={() => dispatch({type: 'addDog', payload: dogInput.current.value})}>Save</button>
            {
                state.dogs.map(dog => <div key={dog.id}>
                    {dog.name}
                    <button onClick={() => dispatch({type: 'deleteDog', payload: dog.id})}>Delete</button>
                </div>)
            }
        </div>
    </div>
  );
}

export default App;

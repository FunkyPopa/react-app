import {useState} from "react";
import Char from "../Char/RaM";

export default function Char2() {
    let [chars, setChars] = useState([])

    fetch('https://rickandmortyapi.com/api/character')
        .then(value => value.json())
        .then(value => {
            setChars(value.results.splice(0,6));
        });

    return (
        <div className="wrapper">
            {chars.map((value, index) => (<Char character={value} key={index}/>))}
        </div>
    );

}
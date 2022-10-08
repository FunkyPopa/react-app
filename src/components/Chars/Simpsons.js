import {data} from "../../data";
import Simpson from "../Char/Simpson"

export default function Simpsons() {
    return (
        <div className="wrapper">
            {data.map((value, index) => (<Simpson item={value} key={index}/>))}
        </div>
    )

}
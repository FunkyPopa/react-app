import {Users} from "../components";
import {useSelector} from "react-redux";

const UsersPage = ({dispatch}) => {
    return(
        <div>
           <Users dispatch={dispatch}/>
        </div>
    )
}

export {UsersPage}
import {useEffect} from "react";
import {usersService} from "../../services";
import {useSelector} from "react-redux";

const Users = ({dispatch}) => {

    useEffect( () => {
        usersService.getAll().then(({data}) => {
            dispatch({type: 'LOAD_USERS', payload: data})
        })
    }, []);

    return(
        <div>
            Users
        </div>
    )
}

export {Users}
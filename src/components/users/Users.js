import {useEffect} from "react";

import {usersService} from "../../services";
import {User} from "../user/User";
import {useDispatch, useSelector} from "react-redux";

const Users = () => {
    const {state} = useSelector( state => state.userReducer)
    const dispatch = useDispatch();


    useEffect( () => {
        usersService.getAll().then(({data}) => {
            dispatch({type: 'LOAD_USERS', payload: data});
        })
    }, []);

    return(
        <div>
            {
                state.map(user => <User user={user} key={user.id}/>)
            }
        </div>
    )
}

export {Users}
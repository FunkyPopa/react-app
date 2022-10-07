import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";

import {usersService} from "../../services";
import {User} from "../user/User";

const Users = () => {
    const {users} = useSelector( state => state.userReducer)
    const dispatch = useDispatch();


    useEffect( () => {
        usersService.getAll().then(({data}) => {
            dispatch({type: 'LOAD_USERS', payload: data});
        })
    }, []);

    return(
        <div>
            {
                users.map(user => <User user={user} key={user.id}/>)
            }
        </div>
    )
}

export {Users}
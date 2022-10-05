import {useEffect, useState} from "react";

import {usersService} from "../../services";
import {User} from "../user/User";

const Users = ({dispatch}) => {
    let [users, setUsers] = useState([]);


    useEffect( () => {
        usersService.getAll().then(({data}) => {
            setUsers(data);
            dispatch({type: 'LOAD_USERS', payload: data});
        })
    }, []);

    return(
        <div>
            {
                users.map(user => <User user={user} key={user.id} dispatch={dispatch}/>)
            }
        </div>
    )
}

export {Users}
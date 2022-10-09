import {useEffect, useState} from "react";

import {userService} from "../../services";
import {User} from "../User/User";


const Users = ({getUserId}) => {
    let [users, setUsers] = useState([]);


    useEffect( () => {
        userService.getAll().then(({data}) => {
            setUsers(data)
            console.log(data)
        })

    }, []);

    return (
            <div className="users">
                {users.map((user, index) => (<User item={user} key={index} getUserId={getUserId}/>))}
            </div>
    )

}

export {Users}
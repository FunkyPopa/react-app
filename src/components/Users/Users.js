import {useEffect, useState} from "react";

import {userService} from "../../services";
import {User} from "../User/User";
import {UserForm} from "../User Form/UserForm";

const Users = () => {
    let [users, setUsers] = useState([]);

    useEffect(() => {
        userService.getAll().then(({data}) => setUsers(data));
    }, []);

    return (
        <div>
            <UserForm setUsers={setUsers}/>
            <hr/>
            {users.map((user, index) => <User user={user} key={index}/>)}
        </div>
    )
}

export {Users}
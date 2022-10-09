import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";

import css from './Users.module.css'
import {userService} from "../../services";
import {userActions} from "../../store";
import {User} from "../User/User";
import {UserInfo} from "../User Info/UserInfo";


const Users = () => {
   const {users, user} = useSelector(store => store.userReducer);
    const dispatch = useDispatch();

    useEffect(() => {
        userService.getAll().then(({data}) => {
            console.log(userActions.getAll());
            dispatch(userActions.getAll(data))
        });
    }, []);

    return(
        <div className={css.userWrapper}>
            <div className={css.users}>
                {
                    users.map(user => <User key={user.id} user={user}/>)
                }
            </div>
                {
                    user && <UserInfo/>
                }

        </div>
    );
}

export {
    Users
}
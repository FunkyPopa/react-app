import {useSelector} from "react-redux";


import css from './UserInfo.module.css'

const UserInfo = () => {
    const {user} = useSelector(store => store.userReducer);

    const {id, name, username, email} = user
    return(
        <div className={css.userInfo}>
            <h3>{id} - {name}</h3>
            <h3>Username: {username}</h3>
            <h3>Email: {email}</h3>
        </div>
    )
}

export {UserInfo}
import {Link} from "react-router-dom";

import css from './header.module.css'

const Headers = () => {
    return(
        <div className={css.header}>
            <Link to={'/'}>Home</Link>
            <Link to={'/users'}>Users</Link>
            <Link to={'/posts'}>Posts</Link>
            <Link to={'/comments'}>Comments</Link>
        </div>
    )
}

export {Headers}
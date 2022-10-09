import {Link} from "react-router-dom";

import css from './Header.module.css'

const Header = () => {
    return(
        <div className={css.header}>
            <Link to={'/'}>Home</Link>
            <Link to={'/users'}>Users</Link>
            <Link to={'/posts'}>Posts</Link>
        </div>
    )
}

export {Header}

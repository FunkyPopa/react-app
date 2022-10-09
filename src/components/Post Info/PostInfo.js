import {useSelector} from "react-redux";

import css from './PostInfo.module.css'

const PostInfo = () => {
    const {post} = useSelector(store => store.postReducer);

    return(
        <div className={css.postInfo}>
            <h3>User ID: {post.userId}</h3>
            <h4>Body: {post.body}</h4>
        </div>
    )
}

export {PostInfo}
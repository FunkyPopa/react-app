import {useDispatch, useSelector} from "react-redux";

import {postActions} from "../../store";
import {PostInfo} from "../Post Info/PostInfo";

const Post = ({post}) => {
    const {post: currentPost} = useSelector(store => store.postReducer);
    const dispatch = useDispatch();

    const {id, title} = post
    return(
        <div>
            <h3>{id} - {title}</h3>
            <button onClick={() => dispatch(postActions.getPost(id))}>Info</button>
            {currentPost && currentPost.id === id && <PostInfo/>}
        </div>
    )
}

export {Post}
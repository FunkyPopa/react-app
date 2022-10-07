import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";

import {postsService} from "../../services";
import {Post} from "../post/Post";


const Posts = () => {
    const {posts} = useSelector(state => state.postReducer)
    const dispatch = useDispatch();

    useEffect( () => {
        postsService.getAll().then(({data}) => {
            dispatch({type: 'LOAD_POSTS', payload: data})
        })
    }, []);

    return(
        <div>
            {
                posts.map(post => <Post post={post} key={post.id}/>)
            }
        </div>
    )
}

export {Posts}
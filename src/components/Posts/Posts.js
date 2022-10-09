import {useEffect} from "react";
import {postService} from "../../services/post.service";
import {useDispatch, useSelector} from "react-redux";
import {postActions} from "../../store";
import {Post} from "../Post/Post";


const Posts = () => {
    const {posts} = useSelector(store => store.postReducer);
    const dispatch = useDispatch();

    useEffect(() => {
        postService.getAll().then(({data}) => {
            dispatch(postActions.getAll(data))
        })
    }, []);

    return(
        <div>
            {posts.map(post => <Post key={post.id} post={post}/>)}
        </div>
    )
}

export {Posts}
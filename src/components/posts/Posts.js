import {useEffect, useState} from "react";

import {postsService} from "../../services";
import {Post} from "../post/Post";


const Posts = ({dispatch}) => {
    let [posts, setPosts] = useState([]);

    useEffect( () => {
        postsService.getAll().then(({data}) => {
            setPosts(data)
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
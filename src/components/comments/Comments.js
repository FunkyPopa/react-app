import {useEffect, useState} from "react";

import css from './comments.module.css'
import {commentService} from "../../services";
import {Comment} from "../comment/Comment";
import {Post} from "../post/Post";

const Comments = ({getPosts, posts}) => {
    let [comments, setComments] = useState([])

    useEffect(() => {
        commentService.getAll.then(({data}) => {
            setComments(data)
            console.log(data);
        })
    }, [])

    return(
        <div className={css.wrapper}>
            <div>
                {
                    comments.map(comment => <Comment item={comment} key={comment.id} getPosts={getPosts}
                                                     posts={posts}/>)
                }
            </div>
            <div>
                {posts && <Post posts={posts}/>}
            </div>
        </div>
    )
}

export {Comments}
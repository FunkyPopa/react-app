import {useEffect, useState} from "react";
import {commentService} from "../../services";
import {Comment} from "../Comment/Comment";
import {CommentForm} from "../Comment Form/CommentForm";

const Comments = () => {
    const [comments, setComments] = useState([]);

    useEffect(() => {
        commentService.getAll().then(({data}) => {
            setComments(data);
            console.log(data);
        });

    }, [])

    return (
        <div>
            <CommentForm setComments={setComments}/>
            <hr/>
            {comments.map((comment, index) => (<Comment comment={comment} key={index}/>))}
        </div>
    )
}

export {Comments}
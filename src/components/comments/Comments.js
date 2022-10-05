import {useEffect, useState} from "react";

import {commentsService} from "../../services";
import {Comment} from "../comment/Comment";
import {useDispatch} from "react-redux";

const Comments = () => {
    let [comments, setComments] = useState([]);
    let dispatch = useDispatch();

    useEffect( () => {
        commentsService.getAll().then(({data}) => {
            setComments(data)
            dispatch({type: 'LOAD_COMMENTS', payload: data})
        })
    }, []);

    return(
        <div>
            {
                comments.map(comment => <Comment comment={comment} key={comment.id}/>)
            }
        </div>
    )
}

export {Comments}
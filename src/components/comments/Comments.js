import {useEffect, useState} from "react";

import {commentsService} from "../../services";
import {Comment} from "../comment/Comment";

const Comments = ({dispatch}) => {
    let [comments, setComments] = useState([]);

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
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";

import {commentsService} from "../../services";
import {Comment} from "../comment/Comment";

const Comments = () => {
    const {comments} = useSelector(state => state.commentReducer)
    const dispatch = useDispatch();

    useEffect( () => {
        commentsService.getAll().then(({data}) => {
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
import {useEffect} from "react";
import {commentsService} from "../../services";

const Comments = ({dispatch}) => {

    useEffect( () => {
        commentsService.getAll().then(({data}) => {
            dispatch({type: 'LOAD_COMMENTS', payload: data})
        })
    }, []);

    return(
        <div>
            Comments
        </div>
    )
}

export {Comments}
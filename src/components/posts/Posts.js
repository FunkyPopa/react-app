import {useEffect} from "react";
import {postsService} from "../../services";
import {useSelector} from "react-redux";

const Posts = ({dispatch}) => {

    useEffect( () => {
        postsService.getAll().then(({data}) => {
            dispatch({type: 'LOAD_POSTS', payload: data})
        })
    }, []);

    return(
        <div>
            Posts
        </div>
    )
}

export {Posts}
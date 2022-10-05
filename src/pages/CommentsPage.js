import {Comments} from "../components";

const CommentsPage = ({dispatch}) => {
    return(
        <div>
            <Comments dispatch={dispatch}/>
        </div>
    )
}

export {CommentsPage}
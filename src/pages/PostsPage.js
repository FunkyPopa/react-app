import {Posts} from "../components";

const PostsPage = ({dispatch}) => {
    return(
        <div>
            <Posts dispatch={dispatch}/>
        </div>
    )
}

export {PostsPage}
import {Post} from "../post/Post";

const Comment = ({item, getPosts, posts}) => {
    let {id, name, postId} = item

    return (
        <div>
            <button onClick={() => getPosts(postId)}>{id} - {name}</button>
        </div>
    )
}

export {Comment}
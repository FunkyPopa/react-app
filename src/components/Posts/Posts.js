import {Post} from "../Post/Post";

const Posts = ({posts}) => {

    return (
        <div className='posts'>
            {posts.map((post, index) => (<Post item={post} key={index}/>))}
        </div>
    )

}

export {Posts}
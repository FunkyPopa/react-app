
const Post = ({posts}) => {
    return(
        <div>
            <h3>{posts.id} - {posts.title}</h3>
        </div>
    )
}

export {Post}
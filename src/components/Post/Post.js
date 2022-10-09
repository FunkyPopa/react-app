const Post = ({item: post}) => {

    return (
        <h2>{post.id}. {post.title}</h2>
    )
}

export {Post}
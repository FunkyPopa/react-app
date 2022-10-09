const Comment = ({comment}) => {


    return(
        <h2>{comment.id}. {comment.name}</h2>
    )

}

export {Comment}
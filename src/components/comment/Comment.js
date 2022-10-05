const Comment = ({comment}) => {
    let {id, name} = comment
    return(
        <div>
            <h3>{id} - {name}</h3>
        </div>
    )
}

export {Comment}
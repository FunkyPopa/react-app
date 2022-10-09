
const Album = ({item}) => {
    let {id, title} = item

    return(
        <h2>{id} - {title}</h2>
    )
}

export {Album}
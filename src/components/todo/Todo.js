
const Todo = ({item}) => {
    let {id, title} = item

    return(
        <div>
            <h2>{id} - {title}</h2>
        </div>
    )
}

export {Todo}
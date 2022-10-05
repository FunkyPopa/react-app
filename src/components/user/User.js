const User = ({user, dispatch}) => {
    let {id, name} = user

    return(
        <div>
            <h3>{id} - {name}</h3>
        </div>
    )
}

export {User}
const User = ({user, }) => {
    return (
        <div>
            <h2>{user.id} - {user.name}</h2>
            {user.username && <h4>{user.username}</h4>}
        </div>
    )
}

export {User}
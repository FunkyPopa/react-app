const User = ({item: user, getUserId}) => {


    return (
        <div className='user'>
            <h3>{user.id}. {user.name}</h3>
            <button onClick={ () => getUserId(user.id)}>Posts</button>
        </div>
    )
}

export {User}
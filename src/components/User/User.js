import {useDispatch} from "react-redux";

import {userActions} from "../../store";

const User = ({user}) => {
    const dispatch = useDispatch();

    const {id, name} = user
    return(
        <div>
                <h3>{id} - {name}</h3>
                <button onClick={() => dispatch(userActions.getCurrentUser(id))}>Select</button>
        </div>

    )
}

export {User}
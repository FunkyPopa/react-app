import {useForm} from "react-hook-form";

import {userService} from "../../services";


const UserForm = ({setUsers}) => {
    let {register, handleSubmit, formState:{errors}, reset } = useForm()


    const submit = async (user) => {
       const {data} = await userService.create(user);
        console.log(data);
        setUsers(users => [...users, data]);
        reset();
    };

    return(
        <form onSubmit={handleSubmit(submit)}>
            <input placeholder="Name" {...register("name", {required: true})}/>
            {errors.name ? <span>field is required</span> : null}
            <input placeholder="Username" {...register("username")}/>
            {errors.username ? <span>field is required</span> : null}
            <input type="submit" value="Save User"/>
        </form>
    )
}

export {UserForm}
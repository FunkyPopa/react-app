import {useForm} from "react-hook-form";
import {commentService} from "../../services";


const CommentForm = ({setComments}) => {

    let {register, handleSubmit, formState:{errors}} = useForm()

    const submit = async (comment) => {
        let {data} = await commentService.create(comment)
        console.log(data);
        setComments(comments => [...comments, data])
    }

    return (
        <form onSubmit={handleSubmit(submit)}>
            <input placeholder="Name" {...register("name", {required:true})}/>
            {errors.name && <span>field is required</span>}
            <input type='submit' value="Save Comment"/>
        </form>
    )
}

export {CommentForm}
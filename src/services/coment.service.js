import {axiosService} from "./axios.service";
import {urls} from "../config/Urls";


const commentService = {
    getAll: axiosService.get(urls.comments)
}

export {commentService}
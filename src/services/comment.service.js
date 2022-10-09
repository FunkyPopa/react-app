import {axiosService} from "./axios.service";
import {urls} from "../configs/urls";

const commentService = {
    getAll: () => axiosService.get(urls.comments),
    create: (comment) => axiosService.post(urls.comments, comment)
};

export {commentService};
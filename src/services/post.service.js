import {axiosService} from "./axios.service";
import {urls} from "../config/Urls";

const PostService = {
    getPostsById: (postId) => axiosService.get(`${urls.posts}/${postId}` )
}

export {PostService}
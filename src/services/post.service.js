import {axiosService} from "./axios.service";
import {urls} from "../configs/urls";


const postService = {
    getPosts: (userId) => axiosService.get(`${urls.posts}/?userId=${userId}`)
}

export {postService}
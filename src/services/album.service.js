import {axiosService} from "./axios.service";
import {urls} from "../config/Urls";


const albumService = {
    getAll: axiosService.get(urls.albums)
}

export {albumService}
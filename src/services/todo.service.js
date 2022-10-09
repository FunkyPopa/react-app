import {axiosService} from "./axios.service";
import {urls} from "../config/Urls";


const todoService = {
    getAll: axiosService.get(urls.todos)
}

export {todoService}
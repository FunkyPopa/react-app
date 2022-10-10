import {axiosInstance} from "./axios.service";
import {urls} from "../configs/Urls";


const carService = {
    getAll: () => axiosInstance.get(urls.cars),
    create: (car) => axiosInstance.post(urls.cars, car),
    updateById: (id) => axiosInstance.put(`${urls.cars}/${id}`),
    deleteById: (id) => axiosInstance.delete(`${urls.cars}/${id}`)

};

export {
    carService
};

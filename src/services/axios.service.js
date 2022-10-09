import axios from "axios";

import {baseURL} from "../configs/Urls";

const axiosInstance = axios.create({baseURL});

export {axiosInstance}


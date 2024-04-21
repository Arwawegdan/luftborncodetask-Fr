import axios from "axios";

const BASE_URL = 'https://localhost:7208/api/';      //local server

const api = axios.create({
    baseURL: BASE_URL,
    headers: {
        "Content-Type" : 'application/json',
        "Accept": '*/*' 
    }
});

api.interceptors.request.use(config => {
    return config;
}, (err) => {
    return Promise.reject(err);
});

api.interceptors.response.use(response => {
    return response;
}, (err) => {
    return Promise.reject(err);
});



export default api;
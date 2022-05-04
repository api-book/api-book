import axios from 'axios';

// TODO: base url
const baseURL = import.meta.env.DEV ? 'http://localhost:3000' : '';

const request = axios.create({
    baseURL: baseURL,
    timeout: 10000,
});

request.interceptors.request.use(config => {

    return config;
});

export default request;

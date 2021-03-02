import axios from 'axios';

const blogAxiosInstance = axios.create({
    baseURL: 'http://jsonplaceholder.typicode.com'
});

blogAxiosInstance.defaults.headers.common['Authorization'] = 'AUTH TOKEN FROM INSTANCE';

export default blogAxiosInstance;

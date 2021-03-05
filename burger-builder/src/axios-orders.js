import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-fa7e4-default-rtdb.firebaseio.com/',
});

export default instance;

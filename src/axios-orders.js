import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-burger-example-25d4c.firebaseio.com/'
});

export default instance;

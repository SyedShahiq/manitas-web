import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://manicas.herokuapp.com'
});

export default instance;
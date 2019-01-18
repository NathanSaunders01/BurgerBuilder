import axios from 'axios';

const instance = axios.create({
    baseURL: "https://react-build-a-burger-f6d57.firebaseio.com/"
})

export default instance;
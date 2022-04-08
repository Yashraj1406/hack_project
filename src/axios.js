import axios from 'axios';

const instance = axios.create({
	baseURL: 'https://money-bird.herokuapp.com/stock/'
});

export default instance;


import axios from "axios"

const apiClient = axios.create({
    baseURL: 'http://localhost:5000',
    withCredentials: false,
    headers: {
        'Accept': 'application/json'
    }
});

const getPosts = apiClient.get('/posts');

export default  getPosts

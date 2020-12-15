import axios from 'axios'

const api = axios.create({
    baseURL: 'http://gateway.marvel.com/v1/public/',
    timeout: 10000,
})

export default api
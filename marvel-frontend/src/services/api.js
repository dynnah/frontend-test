import axios from 'axios'

const api = axios.create({
    baseURL: 'https://gateway.marvel.com/v1/public',
    timeout: 10000,
    headers: {
        'Accept': '*/*'
    }
})

export default api



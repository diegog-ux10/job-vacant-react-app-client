import axios from 'axios'

const BASE_URL = 'http://127.0.0.1:8000/api'

const instance = axios.create({
  baseURL: BASE_URL,
})

instance.interceptors.request.use((config) => {
  config.headers = {
    ...config.headers,
    'x-token': localStorage.getItem('token'),
  }

  return config
})

export default instance

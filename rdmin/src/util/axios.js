import axios from 'axios'
import { isHaveStorage, getLocalStorage } from '@/util/storage'

const Axios = axios.create({
  baseURL: 'http://127.0.0.1:3000',
  responseType: 'json',
  headers: {
    'Content-Type': 'application/json',
  },
})

Axios.interceptors.request.use(
  (config) => {
    if (isHaveStorage('token')) {
      config.headers['x-access-token'] = getLocalStorage('token');
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
)

Axios.interceptors.response.use(
  (res) => {
    const data = res.data
    return data
  },
  (error) => {
    return Promise.reject(error)
  }
)

export default Axios

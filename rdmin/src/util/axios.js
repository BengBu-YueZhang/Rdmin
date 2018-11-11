import axios from 'axios'
import { isHaveStorage, getLocalStorage, removeLocalStorage } from '@/util/storage'

const Axios = axios.create({
  baseURL: 'http://127.0.0.1:3000',
  responseType: 'json',
  headers: {
    'Content-Type': 'application/json',
  },
})

export default Axios

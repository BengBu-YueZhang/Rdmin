import api from '@/config/api'
import axios from '@/util/axios'

export async function login (params) {
  try {
    return await axios.post(api.login, params)
  } catch (error) {
    throw error
  }
}

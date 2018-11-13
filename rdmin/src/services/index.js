import api from '@/config/api'
import axios from '@/util/axios'

export async function login (params) {
  try {
    return await axios.post(api.login, params)
  } catch (error) {
    throw error
  }
}

export async function logout () {
  try {
    return await axios.post(api.logout)
  } catch (error) {
    throw error
  }
}

export async function currentUser (params) {
  try {
    return await axios.get(api.currentUser)
  } catch (error) {
    throw error
  }
}

export async function postStatistics () {
  try {
    return await axios.get(api.postStatistics)
  } catch (error) {
    throw error
  }
}

export async function replyStatistics () {
  try {
    return await axios.get(api.replyStatistics)
  } catch (error) {
    throw error
  }
}

export async function userStatistics () {
  try {
    return await axios.get(api.userStatistics)
  } catch (error) {
    throw error
  }
}
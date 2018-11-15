import api from '@/config/api'
import axios from '@/util/axios'

// 登录
export async function login (params) {
  try {
    return await axios.post(api.login, params)
  } catch (error) {
    throw error
  }
}

// 登出
export async function logout () {
  try {
    return await axios.post(api.logout)
  } catch (error) {
    throw error
  }
}

// 获取当前用户的信息
export async function currentUser (params) {
  try {
    return await axios.get(api.currentUser)
  } catch (error) {
    throw error
  }
}

// 发帖量统计
export async function postStatistics () {
  try {
    return await axios.get(api.postStatistics)
  } catch (error) {
    throw error
  }
}

// 回复量统计
export async function replyStatistics () {
  try {
    return await axios.get(api.replyStatistics)
  } catch (error) {
    throw error
  }
}

// 用户注册量统计
export async function userStatistics () {
  try {
    return await axios.get(api.userStatistics)
  } catch (error) {
    throw error
  }
}

export async function roleList (params) {
  try {
    return await axios.get(api.roleList, { params })
  } catch (error) {
    throw error
  }
}

export async function userList (params) {
  try {
    return await axios.get(api.userList, { params })
  } catch (error) {
    throw error
  }
}

export async function authList (params) {
  try {
    return await axios.get(api.authList, { params })
  } catch (error) {
    throw error
  }
}


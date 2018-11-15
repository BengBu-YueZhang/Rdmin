import { Map } from 'immutable'
import { login, logout } from '@/services'
import { setLocalStorage, clearLocalStorage, isHaveStorage, getLocalStorage } from '@/util/storage'
import { notification } from 'antd'

export default {
  namespace: 'login',
  state: Map({
    // 登录用户的token
    token: ''
  }),
  reducers: {
    loginSuccess (state, action) {
      setLocalStorage('token', action.token)
      return state.set('token', action.token)
    },
    loginError (state) {
      clearLocalStorage()
      notification.error({ message: '登陆时发生错误, 请重试' })
      return state.set('token', '')
    }
  },
  effects: {
    *loginRequest ({ name, password }, { put, call }) {
      try {
        yield put({ type: 'spin/loadingChange', loading: true })
        if (!isHaveStorage('token')) {
          const { data: { token } } = yield call(login, { name, password })
          yield put({ type: 'loginSuccess', token })
        } else {
          yield put({ type: 'loginSuccess', token: getLocalStorage('token') })
        }
        // 准备系统必须的数据,
        // 当前用户的权限信息
        yield [
          yield put({ type: 'user/currentUserRequest' }),
          yield put({ type: 'role/rolesRequest' })
        ]
        yield put({ type: 'history/push', path: '/user_list' })
      } catch (error) {
        yield put({ type: 'loginError' })
      } finally {
        yield put({ type: 'spin/loadingChange', loading: false })
      }
    },
    *logoutRequest (payload, { put, call }) {
      try {
        yield call(logout)
        yield call(clearLocalStorage)
        yield put({ type: 'history/push', path: '/login' })
      } catch (error) {
        notification.error({ message: '登出失败' })
      }
    }
  }
}
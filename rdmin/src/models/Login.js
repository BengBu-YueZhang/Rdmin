import { Map } from 'immutable'
import { login } from '@/services'
import { routerRedux } from 'dva/router'
import { setLocalStorage, removeLocalStorage } from '@/util/storage'

export default {
  namespace: 'login',
  state: Map({
    token: ''
  }),
  reducers: {
    loginSuccess (state, action) {
      setLocalStorage('token', action.token)
      return state.set('token', action.token)
    },
    loginError (state) {
      removeLocalStorage('token')
      return state.set('token', '')
    }
  },
  effects: {
    *loginRequest ({ name, password }, { put, call }) {
      try {
        yield put({ type: 'spin/loadingChange', loading: true })
        const { data: { token } } = yield call(login, { name, password })
        yield put({ type: 'loginSuccess', token })
      } catch (error) {
        yield put({ type: 'loginError' })
      } finally {
        yield put({ type: 'spin/loadingChange', loading: false })
      }
    },
    *logoutRequest () {
    }
  }
}
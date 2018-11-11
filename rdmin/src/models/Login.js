import { Map } from 'immutable'
import { login } from '@/services'
import { setLocalStorage, clearLocalStorage, isHaveStorage } from '@/util/storage'

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
      clearLocalStorage()
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
        }
        yield [
          yield put({ type: 'user/currentUserRequest' })
        ]
        yield put({ type: 'history/push', path: '/' })
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
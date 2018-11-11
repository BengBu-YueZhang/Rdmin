import { Map } from 'immutable'
import { login } from '@/services'

export default {
  namespace: 'login',
  state: Map({
    token: ''
  }),
  reducers: {
    loginSuccess (state) {
      return state
    },
    loginError (state) {
      return state
    }
  },
  effects: {
    *loginRequest ({ name, password }, { put, call }) {
      try {
        yield put({ type: 'spin/loadingChange', loading: true })
        yield call(login, { name, password })
        yield put({ type: 'loginSuccess' })
      } catch (error) {
        yield put({ type: 'loginError' })
      } finally {
        yield put({ type: 'spin/loadingChange', loading: false })
      }
    }
  }
}
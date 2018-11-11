import { Map } from 'immutable'

export default {
  namespace: 'login',
  state: Map({
    token: ''
  }),
  reducers: {
    loginSuccess (state) {
      console.log('登录成功')
      return state
    },
    loginError (state) {
      console.log('登录失败')
      return state
    }
  },
  effects: {
    *loginRequest ({ name, password }, { put, call }) {
      try {
        yield put({ type: 'loginSuccess' })
      } catch (error) {
        yield put({ type: 'loginError' })
      }
    }
  }
}
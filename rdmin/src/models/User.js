import { Map, List } from 'immutable'
import { currentUser } from '@/services'
import { setLocalStorage } from '@/util/storage'

export default {
  namespace: 'user',
  state: Map({
    currentUser: Map({})
  }),
  reducers: {
    currentUserSuccess (state, action) {
      setLocalStorage('currentUser', action.data)
      return state.set('currentUser', action.data)
    },
    currentUserError (state) {
      return state.set('currentUser', {})
    }
  },
  effects: {
    *currentUserRequest (payload, { put, call }) {
      try {
        const { data } = yield call(currentUser)
        yield put({ type: 'currentUserSuccess', data })
      } catch (error) {
        yield put({ type: 'currentUserError' })
        throw error
      }
    }
  }
}

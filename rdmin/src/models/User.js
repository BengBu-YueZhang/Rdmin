import { Map, List } from 'immutable'
import { currentUser } from '@/services'
import { setLocalStorage } from '@/util/storage'

export default {
  namespace: 'user',
  state: Map({
    currentUser: Map({}),
    list: List([])
  }),
  reducers: {
    currentUserSuccess (state, action) {
      setLocalStorage('currentUser', action.data)
      return state.set('currentUser', action.data)
    },
    currentUserError (state) {
      return state.set('currentUser', {})
    },
    listSuccess (state, action) {
      return state.set('list', action.data)
    },
    listError (state) {
      return state.set('list', [])
    }
  },
  effects: {
    *listRequest ({ pagesize, pagestart }, { put, call }) {
    },
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

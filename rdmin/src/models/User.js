import { Map, List } from 'immutable'
import { currentUser } from '@/services'
import modelExtend from 'dva-model-extend'
import CommonListModel from '@/models/CommonList'
import { setLocalStorage } from '@/util/storage'

export default modelExtend(CommonListModel, {
  namespace: 'user',
  state: Map({
    currentUser: {},
    list: List([])
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
})

import { Map, List } from 'immutable'
import { roleList } from '@/services'

export default {
  namespace: 'role',
  state: Map({
    // 角色的集合
    roles: List([])
  }),
  reducers: {
    rolesSuccess (state, action) {
      return state.set('roles', List(action.list))
    },
    rolesError (state) {
      return state.set('roles', List([]))
    }
  },
  effects: {
    *rolesRequest (payload, { put, call }) {
      try {
        const { data: { list } } = yield call(roleList)
        yield put({ type: 'rolesSuccess', list })
      } catch (error) {
        yield put({ type: 'rolesError' })
      }
    }
  }
}
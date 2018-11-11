import { List } from 'immutable'

/**
 * 列表相关逻辑公共的model
 */
export default {
  reducers: {
    listSuccess (state, action) {
      return state.set('list', action.data)
    },
    listError (state) {
      return state.set('list', [])
    }
  }
}

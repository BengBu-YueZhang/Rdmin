import { Map } from 'immutable'

export default {
  namespace: 'spin',
  state: Map({
    // 全局Spin状态
    loading: false
  }),
  reducers: {
    loadingChange (state, { loading }) {
      if (loading) document.body.style.overflow = 'hidden'
      else document.body.removeAttribute('style')
      return state.set('loading', loading)
    }
  }
}

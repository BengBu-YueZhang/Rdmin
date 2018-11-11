import { routerRedux } from 'dva/router'

export default {
  namespace: 'history',
  state: null,
  effects: {
    *push ({ path }, { put }) {
      yield put(routerRedux.push(path))
    }
  }
}

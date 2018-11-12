import { routerRedux } from 'dva/router'

export default {
  namespace: 'history',
  state: null,
  effects: {
    // 基于action的路由跳转
    *push ({ path }, { put }) {
      yield put(routerRedux.push(path))
    }
  }
}

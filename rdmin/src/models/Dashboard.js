import { Map, List } from 'immutable'
import { postStatistics, replyStatistics, userStatistics } from '@/services'

/**
 * 仪表盘
 */
export default {
  namespace: 'dashboard',
  state: Map({
    postNumberStatistics: List([]),
    replyNumberStatistics: List([]),
    userNumberStatistics: List([])
  }),
  reducers: {
    postStatisticsSuccess (state, action) {
      return state.set('postNumberStatistics', List(action.data))
    },
    postStatisticsError (state) {
      return state.set('postNumberStatistics', List([]))
    },
    replyStatisticsSuccess (state, action) {
      return state.set('replyNumberStatistics', List(action.data))
    },
    replyStatisticsError (state) {
      return state.set('postNumberStatistics', List([]))
    },
    userStatisticsSuccess (state, action) {
      return state.set('userNumberStatistics', List(action.data))
    },
    userStatisticsError (state) {
      return state.set('userNumberStatistics', List([]))
    }
  },
  effects: {
    *postStatisticsRequest (payload, { put, call }) {
      try {
        let { data } = yield call(postStatistics)
        yield put({ type: 'postStatisticsSuccess', data })
      } catch (error) {
        yield put({ type: 'postStatisticsError' })
      }
    },
    *replyStatisticsRequest (payload, { put, call }) {
      try {
        let { data } = yield call(replyStatistics)
        yield put({ type: 'replyStatisticsSuccess', data })
      } catch (error) {
        yield put({ type: 'replyStatisticsError' })
      }
    },
    *userStatisticsRequest (payload, { put, call }) {
      try {
        let { data } = yield call(userStatistics)
        yield put({ type: 'userStatisticsSuccess', data })
      } catch (error) {
        yield put({ type: 'userStatisticsError' })
      }
    }
  }
}

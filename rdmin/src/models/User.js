import { Map, List } from 'immutable'
import { } from '@/services'
import { setLocalStorage, removeLocalStorage } from '@/util/storage'
import modelExtend from 'dva-model-extend'
import CommonListModel from '@/models/CommonList'

export default modelExtend(CommonListModel, {
  namespace: 'user',
  state: Map({
    currentUser: Map({})
  }),
  reducers: {
    currentUserSuccess () {
    },
    currentUserError () {
    }
  },
  effects: {
    *listRequest ({ pagesize, pagestart }, { put, call }) {
    },
    *currentUserRequest () {
    }
  }
})

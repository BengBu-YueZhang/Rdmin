import { Map, List } from 'immutable'
import { } from '@/services'
import { setLocalStorage, removeLocalStorage } from '@/util/storage'

export default {
  namespace: 'auth',
  state: Map({
    list: List([])
  })
}

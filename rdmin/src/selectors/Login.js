import { createSelector } from 'reselect'

export const getToken = createSelector(
  [state => state['login'].get('token')],
  loading => loading
)

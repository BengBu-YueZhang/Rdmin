import { createSelector } from 'reselect'

export const getPostNumberStatistics = createSelector(
  [state => state['dashboard'].get('postNumberStatistics')],
  postNumberStatistics => postNumberStatistics
)

export const getReplyNumberStatistics = createSelector(
  [state => state['dashboard'].get('replyNumberStatistics')],
  replyNumberStatistics => replyNumberStatistics
)

export const getUserNumberStatistics = createSelector(
  [state => state['dashboard'].get('userNumberStatistics')],
  userNumberStatistics => userNumberStatistics
)

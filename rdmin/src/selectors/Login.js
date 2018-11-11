import { createSelector } from 'reselect'

export const getSpin = createSelector(
  [state => state['spin'].get('loading')],
  loading => loading
)

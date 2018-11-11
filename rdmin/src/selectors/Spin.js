import { createSelector } from 'reselect'

export const getSpin = createSelector(
  [state => {
    console.log(state)
    return state['spin'].get('loading')
  }],
  loading => loading
)

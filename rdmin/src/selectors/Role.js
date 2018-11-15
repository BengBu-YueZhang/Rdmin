import { createSelector } from 'reselect'

export const getRoles = createSelector(
  [state => state['role'].get('roles')],
  roles => roles
)

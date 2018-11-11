import React from 'react'
import PropTypes from 'prop-types'
import { Route, Redirect } from 'dva/router'

function authenticate () {
  return true
}

class AuthorizedRoute extends React.Component {

  render() {
    const { component: Component, ...rest } = this.props
    return (
      <Route {...rest} render={
        (props) => {
          return (
            authenticate() ? <Component {...this.props} /> : <Redirect to="/login" />
          ) 
        }}
      />
    )
  }
}


AuthorizedRoute.propTypes = {
}

export default AuthorizedRoute

import React from 'react'
import PropTypes from 'prop-types'
import { Route, Redirect } from 'dva/router'
import { connect } from 'dva'
import { getToken } from '@/selectors/Login'

/**
 * 权限认证, 首先对登录进行鉴权, 其次是用户所属的角色进行鉴权
 */
function authenticate (_this, requiresAuth, auths) {
  if (_this.props.token) {
    if (!requiresAuth) {
      return
    } else {
      if (auths) {
        // 目前角色接口还没有对接
        return
      } else {
        return _this.props.path
      }
    }
  } else {
    return _this.props.path
  }
}

const mapStateToProps = state => {
  return {
    token: getToken(state)
  }
}

class AuthorizedRoute extends React.Component {

  render() {
    const { component: Component, requiresAuth, auths, ...rest } = this.props
    return (
      <Route {...rest} render={
        (props) => {
          const form = authenticate(this, requiresAuth)
          return (
            !Boolean(form) ? <Component {...props} /> : <Redirect to={`/login?form=${form}`} />
          ) 
        }}
      />
    )
  }
}

AuthorizedRoute.propTypes = {
}

export default connect(mapStateToProps)(AuthorizedRoute)

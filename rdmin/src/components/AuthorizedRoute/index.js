import React from 'react'
import PropTypes from 'prop-types'
import { Route, Redirect } from 'dva/router'
import { connect } from 'dva'
import { getToken } from '@/selectors/Login'
import { withRouter } from 'react-router-dom';

/**
 * 权限认证, 首先对登录进行鉴权, 其次是用户所属的角色进行鉴权
 * 关于connect后, router不更新的问题的解决方案: 👇 Saved my day!
 * https://stackoverflow.com/questions/45056150/react-router-v4-not-working-with-redux
 */
function authenticate (_this, requiresAuth, auths) {
  console.log('token', _this.props)
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

export default withRouter(
  connect(mapStateToProps)(AuthorizedRoute)
)

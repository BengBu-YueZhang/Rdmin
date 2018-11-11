import React from 'react'
import { Router, Route, Switch, Redirect } from 'dva/router'
import Login from '@/routes/Login'
import GlobalSpin from '@/components/GlobalSpin'

function RouterConfig({ history }) {
  return (
    <div>
      <GlobalSpin/>
      <Router history={history}>
        <Switch>
          <Route path="/login" component={Login} />
          <Redirect from="/" to="/login" />
        </Switch>
      </Router>
    </div> 
  )
}

export default RouterConfig

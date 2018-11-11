import React from 'react'
import { Router, Route, Switch, Redirect } from 'dva/router'
import Login from '@/routes/Login'
import Dashboard from '@/routes/Dashboard'
import GlobalSpin from '@/components/GlobalSpin'
import Layout from '@/components/Layout'
import AuthorizedRoute from '@/components/AuthorizedRoute'

function RouterConfig({ history }) {
  return (
    <div>
      <GlobalSpin/>
      <Router history={history}>
        <Switch>
          <Route path="/login" component={Login} />
          <Layout>
            <AuthorizedRoute path="/dashboard" component={Dashboard}/>
          </Layout>
          <Redirect from="/" to="/dashboard" />
        </Switch>
      </Router>
    </div> 
  )
}

export default RouterConfig

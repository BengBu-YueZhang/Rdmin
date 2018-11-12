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
          <Redirect from="/" to="/dashboard" exact />
          <Route path="/login" component={Login} />
          <Layout>
            <AuthorizedRoute requiresAuth={false} path="/dashboard" component={Dashboard}/>
          </Layout>
        </Switch>
      </Router>
    </div> 
  )
}

export default RouterConfig

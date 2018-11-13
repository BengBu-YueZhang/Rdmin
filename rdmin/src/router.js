import React from 'react'
import { Router, Route, Switch, Redirect } from 'dva/router'
import Login from '@/routes/Login'

import GlobalSpin from '@/components/GlobalSpin'
import Layout from '@/components/Layout'
import AuthorizedRoute from '@/components/AuthorizedRoute'

import Dashboard from '@/routes/Dashboard'
import FileUpLoad from '@/routes/FileUpLoad'

function RouterConfig({ history }) {
  return (
    <div>
      <GlobalSpin/>
      <Router history={history}>
        <Switch>
          <Redirect from="/" to="/dashboard" exact />
          <Route path="/login" component={Login} />
          <Layout>
            <AuthorizedRoute path="/dashboard" component={Dashboard}/>
            <AuthorizedRoute path="/upload" component={FileUpLoad}/>
          </Layout>
        </Switch>
      </Router>
    </div> 
  )
}

export default RouterConfig

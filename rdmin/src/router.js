import React from 'react'
import { Router, Route, Switch, Redirect } from 'dva/router'
import Loadable from 'react-loadable'

import GlobalSpin from '@/components/GlobalSpin'
import Layout from '@/components/Layout'
import AuthorizedRoute from '@/components/AuthorizedRoute'

import Login from '@/routes/Login'
import Dashboard from '@/routes/Dashboard'
import FileUpLoad from '@/routes/FileUpLoad'

const UserList = Loadable({
  loader: () => import('../src/routes/UserList'),
  loading: () => null
})

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
            <AuthorizedRoute path="/user_list" component={UserList}/>
          </Layout>
        </Switch>
      </Router>
    </div> 
  )
}

export default RouterConfig

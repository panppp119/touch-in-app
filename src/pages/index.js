import React from 'react'
import { Route, Switch } from 'react-router'

import CoreLayout from 'components/layout/CoreLayout'

import ImportUser from 'pages/Operation/ImportUser'
import Dashboard from 'pages/Dashboard'
import Login from 'pages/Login'
import NoMatch from 'pages/NoMatch'

const routes = (
  <CoreLayout>
    <Switch>
      <Route exact path='/operation/ImportUser' component={ImportUser} />
      <Route exact path='/login' component={Login} />
      <Route exact path='/' component={Dashboard} />
      <Route component={NoMatch} />
    </Switch>
  </CoreLayout>
)

export default routes

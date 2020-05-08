import React from 'react'
import { Route, Switch } from 'react-router'

import CoreLayout from 'components/layout/CoreLayout'

import Dashboard from 'pages/Dashboard'
import Login from 'pages/Login'
import NoMatch from 'pages/NoMatch'
import Profile from 'pages/Profile'


const routes = (
  <CoreLayout>
    <Switch>
      <Route exact path='/login' component={Login} />
     
      <Route exact path='/' component={Dashboard} />
      <Route path='/profile' component={Profile} />

      <Route component={NoMatch} />
    </Switch>
  </CoreLayout>
)

export default routes

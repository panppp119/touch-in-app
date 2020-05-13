import React from 'react'
import { Route, Switch } from 'react-router'

import CoreLayout from 'components/layout/CoreLayout'
import Dashboard from 'pages/Dashboard'
import Login from 'pages/Login'
import NoMatch from 'pages/NoMatch'
import Workoutside from './Workoutside/Workoutside'
import Workfromhome from './Workfromhome//Workfromhome'
import Profile from 'pages/Profile'
import Report from 'pages/Report'
import CheckIn from 'pages/CheckIn'
import OperationTools from 'pages/OperationTools'

const routes = (
  <CoreLayout>
    <Switch>
      <Route path='/Workoutside' component={Workoutside} />
      <Route path='/Workfromhome' component={Workfromhome} />
      <Route exact path='/operation_tools' component={OperationTools} />
      <Route exact path='/login' component={Login} />

      <Route exact path='/' component={Dashboard} />
      <Route path='/profile' component={Profile} />
      <Route path='/checkin' component={CheckIn} />
      <Route path='/report' component={Report} />

      <Route component={NoMatch} />
    </Switch>
  </CoreLayout>
)

export default routes

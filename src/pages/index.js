import React from 'react'
import { Route, Switch } from 'react-router'

import CoreLayout from 'components/layout/CoreLayout'
import Dashboard from 'pages/Dashboard'
import Login from 'pages/Login'
import NoMatch from 'pages/NoMatch'
import Workoutside from 'pages/Workoutside/Workoutside'
import Workfromhome from 'pages/Workfromhome//Workfromhome'
import OperationTools from 'pages/OperationTools'
import checkIn from 'pages/Check-In/checkIn'
// import Form from 'pages/Check-In/CheckIn-Type/form'
import Profile from 'pages/Profile'
import Report from 'pages/Report'
import CheckIn from 'pages/CheckIn'

const routes = (
  <CoreLayout>
    <Switch>
      {/* <Route path='/Workfromhome_type' component={Form} /> */}
      <Route path='/checkin' component={checkIn} />
      <Route path='/operation_tools' component={OperationTools} />
      <Route path='/Workoutside' component={Workoutside} />
      <Route path='/Workfromhome' component={Workfromhome} />
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

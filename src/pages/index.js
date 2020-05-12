import React from 'react'
import { Route, Switch } from 'react-router'

import CoreLayout from 'components/layout/CoreLayout'
import Dashboard from 'pages/Dashboard'
import Login from 'pages/Login'
import NoMatch from 'pages/NoMatch'
import Workoutside from './Workoutside/Workoutside'
import Workfromhome from './Workfromhome//Workfromhome'
import Profile from 'pages/Profile'
import CheckIn from 'pages/CheckIn'
import Report from 'pages/Report'
import ReportWFH from './Report/Report-WFH/ReportWFH'
import ReportWFO from './Report/Report-WFO/ReportWFO'

const routes = (
  <CoreLayout>
    <Switch>
      <Route path='/Workoutside' component={Workoutside} />
      <Route path='/Workfromhome' component={Workfromhome} />
      <Route path='/Report/Report-WFH' component={ReportWFH} />
      <Route path='/Report/Report-WFO' component={ReportWFO} />
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

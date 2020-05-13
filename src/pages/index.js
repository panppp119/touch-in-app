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
import CheckInCRUD from './Operation Tools/Check-in-type/CheckInCRUD'
import ImportCheckIn from 'pages/Operation Tools/import-Check-In/ImportCheckIn'

const routes = (
  <CoreLayout>
    <Switch>

      <Route path='/ImportCheckIn' component={ImportCheckIn}/>
      <Route path='/operation_tools/checkin_type' component={CheckInCRUD} />
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

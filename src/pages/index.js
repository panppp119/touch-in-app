import React from 'react'
import { Route, Switch } from 'react-router'
import CoreLayout from 'components/layout/CoreLayout'
import Dashboard from 'pages/Dashboard'
import Login from 'pages/Login'
import NoMatch from 'pages/NoMatch'
import Workoutside from './Workoutside/Workoutside'
import Workfromhome from './Workfromhome//Workfromhome'
import History from 'pages/Profile/History'
import project from 'pages/Operation Tools/Projects/projects'
import checkIn from 'pages/Check-In/checkIn'

const routes = (
  <CoreLayout>
    <Switch>
    <Route path='/checkin/form' component={checkIn} />
      <Route path='/operation_tools/projects' component={project} />
      <Route path='/profile/history' component={History} />
      <Route path="/Workoutside" component={Workoutside} />
      <Route path="/Workfromhome" component={Workfromhome} />
      <Route exact path='/login' component={Login} />
      <Route exact path='/' component={Dashboard} />
      <Route component={NoMatch} />
    </Switch>
  </CoreLayout>
)

export default routes

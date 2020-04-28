import React from 'react'
import { Route, Switch } from 'react-router'
import CoreLayout from 'components/layout/CoreLayout'
import Dashboard from 'pages/Dashboard'
import Login from 'pages/Login'
import NoMatch from 'pages/NoMatch'
import Workoutside from './Workoutside/Workoutside'
import Workfromhome from './Workfromhome//Workfromhome'
import History from './Profile/History/History'

const routes = (
  <CoreLayout>
    <Switch>
    <Route   path="/history" component={History} />
      <Route   path="/Workoutside" component={Workoutside} />
      <Route  path="/Workfromhome" component={Workfromhome} />
      <Route exact path='/login' component={Login} />
      <Route exact path='/' component={Dashboard} />
      <Route component={NoMatch} />
    </Switch>
  </CoreLayout>
)

export default routes

import React from 'react'
import { Switch, Route, useRouteMatch } from 'react-router-dom'
import Users from './Users'
import Projects from './Projects'

const Operation = () => {
  const { path } = useRouteMatch()

  return (
    <Switch>
      <Route exact path={`${path}/users`} component={Users} />
      <Route exact path={`${path}/projects`} component={Projects} />
      {/* <Route exact path={`${path}/checkin_type`}>
        <h1>Check-in</h1>
      </Route> */}
    </Switch>
  )
}

export default Operation

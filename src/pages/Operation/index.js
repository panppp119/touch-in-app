import React from 'react'
import { Switch, Route, useRouteMatch } from 'react-router-dom'
import User from './User'

const Operation = () => {
  const { path } = useRouteMatch()

  return (
    <Switch>
      <Route exact path={`${path}/users`} component={User} />
      <Route exact path={`${path}/projects`}>
        <h1>Projects</h1>
      </Route>
      <Route exact path={`${path}/checkin_type`}>
        <h1>Check-in</h1>
      </Route>
    </Switch>
  )
}

export default Operation

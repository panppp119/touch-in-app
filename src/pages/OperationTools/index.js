import React from 'react'
import { Switch, Route, useRouteMatch } from 'react-router-dom'

// import Users from './Users'
import Projects from './Projects'
// import CheckInType from './CheckInType'

const OperationTools = () => {
  const { path } = useRouteMatch()

  return (
    <Switch>
      {/* <Route exact path={`${path}/users`} component={Users} /> */}
      <Route exact path={`${path}/projects`} component={Projects} />
      {/* <Route exact path={`${path}/checkin_type`} component={CheckInType} /> */}
    </Switch>
  )
}

export default OperationTools

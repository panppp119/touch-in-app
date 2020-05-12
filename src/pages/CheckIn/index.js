import React from 'react'
import { Switch, Route, useRouteMatch } from 'react-router-dom'

import CheckIn from './CheckIn'
import Rules from './Rules'

const Profile = () => {
  const { path } = useRouteMatch()

  return (
    <Switch>
      <Route exact path={`${path}/form`} component={CheckIn} />
      <Route exact path={`${path}/rules`} component={Rules} />
    </Switch>
  )
}

export default Profile

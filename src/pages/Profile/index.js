import React from 'react'
import { Switch, Route, useRouteMatch } from 'react-router-dom'

import ProfileOverview from './Profile-Overview/ProfileOverview'

const Profile = () => {
  const { path } = useRouteMatch()

  return (
    <Switch>
      <Route exact path={`${path}/overview`} component={ProfileOverview} />
      {/* <Route exact path={`${path}/history`} component={ProfileHistory} /> */}
    </Switch>
  )
}

export default Profile

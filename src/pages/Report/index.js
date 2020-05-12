import React from 'react'
import { Switch, Route, useRouteMatch } from 'react-router-dom'
import CheckInList from './CheckInList'

// import CheckInView from './CheckInView'

const Profile = () => {
  const { path } = useRouteMatch()

  return (
    <Switch>
      <Route exact path={`${path}`} component={CheckInList} />
      {/* <Route exact path={`${path}/:id`} component={CheckInView} /> */}
    </Switch>
  )
}

export default Profile

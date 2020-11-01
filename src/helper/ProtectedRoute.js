import React from 'react'
import { Route, Redirect } from "react-router-dom";
import { isLogged } from '../auth/atuh'

const ProtectedRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => isLogged() ? (<Component {...props} />) : (
    <Redirect to={{ pathname: "/" }} />)} />
)

export default ProtectedRoute




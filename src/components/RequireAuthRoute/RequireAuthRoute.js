import React, { Navigate } from 'react-router-dom';
import {useContext} from "react";
import {LoggedInUserContext} from "../../contexts/LoggedInUserContext";

export function RequireAuthRoute({children}) {

  const loggedIn = useContext(LoggedInUserContext);

  return loggedIn ? children : <Navigate to="/" replace={true}/>;
}

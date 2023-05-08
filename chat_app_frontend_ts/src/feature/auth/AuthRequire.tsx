// this help to protect the route
import { useLocation,Navigate,Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { getAuthdata } from "./authSlice";

import React, { ReactElement } from 'react'


function AuthRequire():ReactElement {
    const {accessToken}  = useSelector(getAuthdata)
  return (
    accessToken
    ?<Outlet/>:
    <Navigate to={'/login'} state={{from:location}} replace /> 

  )
}

export default AuthRequire
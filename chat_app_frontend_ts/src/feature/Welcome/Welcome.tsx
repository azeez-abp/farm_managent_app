import React from 'react'
import { useSelector } from 'react-redux'
import { getAuthdata } from '../auth/authSlice'
function Welcome() {
  const {accessToken,user}  = useSelector(getAuthdata)
  const welcome  = user? `Welcome ${user}`:'welcome'
  const token  = accessToken.slice(0,9)+'...'
  return (

    <div>Welcome</div>
  )
}

export default Welcome
import { AuthContext } from '@/contexts/AuthContext'
import React, { useContext } from 'react'

const Profile = () => {
  const {user} = useContext(AuthContext)
  return (
<>
<div>{user.emailAddress}</div>
    <div>IP : {user.ip}</div>
    <div>ORG :{user.org}</div>
    <div>ZIP : {user.postal}</div>
    <div>VER : {user.version}</div>
    <div>NET :{user.network}</div>
    <div>CAP : {user.country_capital}</div></>
  )
}

export default Profile
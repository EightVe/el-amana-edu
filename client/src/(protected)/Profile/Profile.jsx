import { AuthContext } from '@/contexts/AuthContext'
import React, { useContext } from 'react'

const Profile = () => {
  const {user} = useContext(AuthContext)
  return (
    <div>{user.emailAddress}</div>
  )
}

export default Profile
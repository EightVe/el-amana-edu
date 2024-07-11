import UserAvatar from '@/components/avatar/UserAvatar'
import { AuthContext } from '@/contexts/AuthContext'
import React, { useContext } from 'react'

const Home = () => {
  const {logout} = useContext(AuthContext)
  return (
    <div><UserAvatar />
    <button onClick={logout}>Logout</button></div>
  )
}

export default Home
import UserAvatar from '@/components/avatar/UserAvatar'
import { Badge } from '@/components/ui/badge'
import SEO from '@/lib/SEO'
import React from 'react'

const Home = () => {
    
  return (
    <>
<SEO
title="Eightve | Home Page"
description=" friendly page for learning React Helmet."
name=" name."
type="article" />



<div className='h-screen w-full flex justify-center items-center flex-col gap-3'>
        <Badge className="px-2.5 py-0.5 text-base">Your Email Is Not Verified</Badge>
        <h1>Email :</h1>
        <h1>Joined :</h1>
        <h1>isAdmin? :</h1>
        <UserAvatar />
</div>
</>
  )
}

export default Home
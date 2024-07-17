import React from 'react'
import WebBannerIMG from '../WebBanner.jpg'
const WebBanner = () => {
  return (
    <img src={WebBannerIMG} className='h-screen w-full rounded-tl-3xl rounded-bl-3xl hidden lg:block object-cover'/>
  )
}

export default WebBanner
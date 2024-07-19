import React from 'react'
import Content from './Content';

export default function Footer() {
  return (
    <div 
        className='relative h-screen lg:h-[800px]'
        style={{clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)"}}
    >
        <div className='relative h-[calc(100vh+800px)] -top-[100vh]'>
            <div className='lg:h-[800px] h-screen sticky top-[calc(100vh-800px)]'>
                <Content />
            </div>
        </div>
    </div>
  )
}
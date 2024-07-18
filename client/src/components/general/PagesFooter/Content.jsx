import React from 'react'

export default function Content() {
  return (
    <div className='bg-[#aaaa9b] py-8 px-12 h-full w-full flex flex-col justify-end'>
        <Section1 />
        <Section2 />
    </div>
  )
}

const Section1 = () => {
    return (
        <div>
            <Nav />
        </div>
    )
}

const Section2 = () => {
    return (
        <div className='flex justify-center flex-col items-start'>
            <h1 className='text-6xl lg:text-9xl leading-[0.8] mt-10 paragfont uppercase'>ELAMANA</h1>
            <div>
            <p className='paragfont'>© copyright el amana for education (2022-2024)</p>
            <p className='paragfont'>designed & developed by eightve studio</p>
            </div>
        </div>
    )
}

const Nav = () => {
    return (
        <div className='flex shrink-0 gap-20'>
            <div className='flex flex-col gap-2'>
                <h3 className='mb-2 uppercase text-black font-bold paragfont'>pages</h3>
                <p className='capitalize paragfont text-base'>Home</p>
                <p className='capitalize paragfont text-base'>about</p>
                <p className='capitalize paragfont text-base'>universities</p>
                <p className='capitalize paragfont text-base'>sign in</p>
            </div>
            <div className='flex flex-col gap-2'>
                <h3 className='mb-2 uppercase text-black font-bold paragfont'>contact</h3>
                <p className='capitalize paragfont text-base'>whatsapp</p>
                <p className='capitalize paragfont text-base'>instagram</p>
                <p className='capitalize paragfont text-base'>facebook</p>
            </div>
        </div>
    )
}
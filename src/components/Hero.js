import React from 'react'
import hero from '../assets/hero.png'
import Typed  from 'react-typed'

function Hero() {
  return (
    <div className='pt-36' id='Hero'>
        <div className='max-w-[1240px] font-open mx-auto bg-white rounded-3xl text-2xl sm:text-3xl lg:text-4xl'>
        <div className='grid md:grid-cols-2 py-20 sm:px-5 md:px-20 items-center'>
            <div className='pl-10'>
                <h1 className='font-bold text-5xl sm:text-6xl md:text-7xl text-red-600'>Music Jam</h1>
                <Typed strings={['Bajt na Bicie']} loop typeSpeed={120} backSpeed={140}/>
                <div className='py-10 md:py-16'>
                    <p>26.11.2022</p>
                    <p>Instytut Kultury Miejskiej</p>
                    <p>Gdańsk</p>
                </div>
                <a href="https://app.evenea.pl/event/musicjam2022/?" target='_blank'>
                <button className='mt-2 sm:mt-0 font-normal bg-red-600 rounded-md px-4 py-1 md:py-2 hover:scale-105 duration-500 text-xl md:text-2xl lg:text-4xl'>Weź udział</button>
                </a>
            </div> 
            <div className='mx-0 px-0 py-0 my-0 md:flex md:scale-70 lg:scale-100'>
                <img src={hero} alt="hero image"/>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Hero
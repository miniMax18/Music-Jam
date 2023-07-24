import React from 'react'
import {BsLinkedin} from 'react-icons/bs'

function Footer() {
  return (
    <div className='bg-[#000300] text-white py-6 md:py-10 text-md md:text-xl lg:text-3xl justify-center flex'>
        <a href="https://www.linkedin.com/in/jakub-sikora-307513245/" target='_blank'>
          <div className='flex'>
                <p>Designed and developed by Jakub Sikora</p>
                <BsLinkedin size={40} className='pl-4 pb-3 lg:pb-0'/>
          </div>
        </a>
    </div>
  )
}

export default Footer
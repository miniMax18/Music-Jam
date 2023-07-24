import React from 'react';
import { useState, useEffect } from 'react'
import {FaBars, FaTimes} from 'react-icons/fa'
import {Link} from 'react-scroll'

function Navbar() {

    const [nav, setNav] = useState(false)

    const handleNav = () => {
            setNav(!nav)
    }

    const [scrolled, setScrolled] = useState(false)

   useEffect(() => {
    function handleScroll() {
        const scrollDistance = window.pageYOffset || document.documentElement.scrollTop;
        setScrolled(scrollDistance > 0);
        }

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
   }, [])

   const navitems = [
    {
        to: 'OProjekcie',
        text: 'O projekcie',
    },  {
        to: 'Harmonogram',
        text: 'Harmonogram',
    },  {
        to: 'FAQ',
        text: 'FAQ',
    },
   ]

  return (
     <div className={scrolled ? '!z-50 fixed w-full bg-[#f8f8f8] shadow-md' : '!z-50 fixed w-full bg-[#f8f8f8] '}>
        <div className='flex justify-between items-center py-8 max-w-[1140px] mx-auto px-4'>
        <h1 className='font-satisfy text-[38px] sm:text-[48px]'><Link to='Hero' spy={true} smooth={true} offset={-300} duration={500}>Music Jam</Link></h1>
            <ul className='hidden md:flex text-[24px] font-semibold'>
                {navitems.map((item, i) => (
                    <li key={i} className='px-6 hover:scale-105 duration-500'>
                        <Link to={item.to} spy={true} smooth={true} offset={-300} duration={500}>{item.text}</Link>
                    </li>
                ))}
            </ul>

        <div onClick={handleNav} className='block md:hidden'>
            {nav ? <FaTimes /> : <FaBars />}
        </div>

        <div className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r ease-in-out duration-500 bg-white' : 'ease-in-out duration-500 fixed left-[-100%]'}>
    
            <ul>
                <li className='pl-5 pt-5'>
                <h1 className='font-satisfy text-[38px] sm:text-[48px]'><Link onClick={handleNav} to='Hero' spy={true} smooth={true} offset={-300} duration={500}>Music Jam</Link></h1>
                </li>
                {navitems.map((item, i) => (
                        <li key={i} className='text-[24px] pt-5 underline pl-5 font-semibold'> 
                        <Link onClick={handleNav} to={item.to} spy={true} smooth={true} offset={-200} duration={500}>{item.text}</Link>
                        </li>
                ))}
            </ul>
        </div>
     </div> 
     </div>
  )
}

export default Navbar
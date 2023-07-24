import React from 'react'
import CoJestGrane from './CoJestGrane'
import Galeria from './Galeria'
import DlaKogo from './DlaKogo'
import Harmonogram from './Harmonogram'
import DlaczegoWarto from './DlaczegoWarto'
import Organizatorzy from './Organizatorzy'
import Faq from './Faq'
import ReuseMusic from './ReuseMusic'
import Gdzie from './Gdzie'

function Wrapper() {
  return (
    <div className='bg-white max-w-[1240px] mx-auto rounded-t-3xl mt-20 px-5 sm:px-20 !text-center'>
        <Galeria />
        <CoJestGrane />
        <DlaKogo />
        <DlaczegoWarto />
        <Gdzie />
        <Harmonogram />
        <ReuseMusic />
        <Faq />
        <Organizatorzy />
    </div>
  )
}

export default Wrapper
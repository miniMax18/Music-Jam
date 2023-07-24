import React from 'react'
import codeme from '../assets/codeme-logo.png'
import hs from '../assets/hs-logo.png'
import ikm from '../assets/ikm-logo.png'
import protone from '../assets/protone-logo.jpg'
import {AiFillFilePdf} from 'react-icons/ai'
import rk from '../assets/Files/RegulaminKonkursu.pdf'
import ru from '../assets/Files/RegulaminUdzialu.pdf'
import zn from '../assets/Files/ZasadyNagrody.pdf'


function Organizatorzy() {
    const Org = [
     {
      id: 1,
      img: codeme,
      link: 'https://codeme.pl/',
    }, {
      id: 2,
      img: ikm,
      link: 'https://ikm.gda.pl/en/',
     }, {
      id: 3,
      img: hs,
      link: 'https://hs3.pl/',
    }       
    ]

    const Part = [
      {
        img: protone,
        link: 'https://www.facebook.com/pro.tone.poland/',
      }
    ]

    const Files = [
      {
        id: 1, 
        link: rk,
        text: 'Regulamin Konkursu',
      },
      {
        id: 2, 
        link: ru,
        text: 'Regulamin Udziału',
      },
      {
        id: 3, 
        link: zn,
        text: 'Zasady Nagrody',
      },
    ]


  return (
    <div className='py-6 md:py-10 lg:py-16'>
        <h2 className='text-2xl md:text-3xl lg:text-4xl'>Organizatorzy</h2>
        <div className='flex py-4 justify-center'>
          {Org.map((item) => (
            <a href={item.link} target="_blank" key={item.id} className='px-3 sm:px-4 md:px-10'>
              <img src={item.img} className='hover:scale-105 duration-300'/>
            </a>
          ))}
        </div>
        <h2 className='text-2xl md:text-3xl lg:text-4xl'>Partnerzy</h2>
        <div className='flex py-4 justify-center max-h-40'>
          {Part.map((item, i) => (
            <a href={item.link} target="_blank" key={i} className='px-2 sm:px-4 md:px-10'>
              <img src={item.img} className='hover:scale-105 duration-300 object-scale-down h-28'/>
            </a>
          ))}
        </div>
        <h2 className='py-4 text-2xl md:text-3xl lg:text-4xl'>Dokumenty</h2>
        <div className='grid sm:grid-cols-3 items-center mx-auto justify-center'>
            {Files.map((item) => (
            <a href={item.link} target='_blank' key={item.id}>
              <div className='flex bg-slate-50 py-1 justify-center rounded-xl hover:scale-105 duration-500 items-center mx-4 shadow-md mb-4 sm:mb-0'>
                <AiFillFilePdf size={60}/>
                <p className='text-xl mt-4'>{item.text}</p>
              </div>
            </a>
            ))}
        </div>
    </div>
  )
}

export default Organizatorzy
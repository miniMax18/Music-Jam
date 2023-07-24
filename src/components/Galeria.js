import React from 'react'
import zdj1 from '../assets/galeria/zdj1.jpg'
import zdj2 from '../assets/galeria/zdj2.jpg'
import zdj3 from '../assets/galeria/zdj3.jpg'
import zdj4 from '../assets/galeria/zdj4.jpg'
import zdj5 from '../assets/galeria/zdj5.jpg'
import Carousel from 'better-react-carousel'
import ReactPlayer from 'react-player/youtube'

function Galeria() {
  const images = [
    zdj1,
    zdj2,
    zdj3,
    zdj4,
    zdj5,
  ];

  return (
    <div className='py-6 md:py-10 lg:py-16'>
      <h2 className='text-2xl md:text-3xl lg:text-5xl'>Jak było ostatnio?</h2>
      <div className='pt-4 flex mx-auto justify-center py-5'>
        <ReactPlayer
          url='https://www.youtube.com/watch?v=Zx-dYi7YqiA&ab_channel=IKMGdansk'
        />
      </div>
      <div className='pt-4'>
      <Carousel cols={2} rows={1} gap={9} loop>
        {images.map((item, i) => (
           <Carousel.Item key={i}>
           <img width="100%" src={item} className='rounded-xl'/>
          </Carousel.Item>
        ))}
      </Carousel>
      </div>
    </div>
  )
}

export default Galeria
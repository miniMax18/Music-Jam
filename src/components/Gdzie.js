import React from 'react'

function Gdzie() {
  return (
    <div className='py-6 md:py-10 lg:py-16'>
      <h2 className='text-2xl md:text-3xl lg:text-4xl'>Gdzie?</h2>
        <div className='pt-6'>
          <div className='sm:flex items-center justify-center'>
          <h3 className='text-xl md:text-2xl lg:text-3xl sm:pr-10'>Instytut Kultury Miejskiej</h3>
          <a href='https://www.google.com/maps/place/Institute+of+Urban+Culture/@54.348614,18.654018,17z/data=!4m15!1m8!3m7!1s0x46fd73a0339eafff:0x1132eef90d3f6a22!2sInstitute+of+Urban+Culture!8m2!3d54.348614!4d18.654018!10e1!16s%2Fg%2F11gz8mh3s!3m5!1s0x46fd73a0339eafff:0x1132eef90d3f6a22!8m2!3d54.348614!4d18.654018!16s%2Fg%2F11gz8mh3s?entry=ttu' target='_blank'>
            <button className='mt-2 sm:mt-0 font-semibold bg-red-600 rounded-md px-4 py-1 md:py-2 hover:scale-105 duration-500 text-xl md:text-2xl lg:text-3xl'>Zobacz na mapie</button>
          </a>
          </div>
          <div className='text-lg md:text-xl lg:text-2xl font-light'>
            <p className='pt-5'>Inspirujemy. Wspieramy. Tworzymy.</p>
            <p className='pt-5'>Działamy dla i z mieszkańcami dzielnic Gdańska. Interesuje nas kultura otwarta, związana z Gdańskiem i jego dzielnicami, dostępna dla mieszkańców i współtworzona razem z nimi</p>
            <p className='pt-5'>Podczas MusicJamu przygotujemy dla Was specjalne strefy do rozstawienia instrumentów i hałasowania! Nie mamy żadnych sąsiadów... którym hałas w sobotę mógłby przeszkadzać. </p>
            <p className='pt-5'>Zapewnimy wam miejsce do pracy, prąd, wi-fi... + jedzenie i picie.</p>
          </div>
        </div>
        <div className='pt-10 sm:pt-20'>
          <div className='sm:flex items-center justify-center'>
          <h3 className='text-xl md:text-2xl lg:text-3xl sm:pr-10'>Afterparty</h3>
          <a href='https://www.google.com/maps/place/Czudner+SPOT/@54.3413672,18.6551715,17z/data=!3m1!4b1!4m6!3m5!1s0x46fd73ee018180cd:0xdb515aa03930f377!8m2!3d54.3413642!4d18.6600478!16s%2Fg%2F11t321fbtq?entry=ttu' target='_blank'>
            <button className='mt-2 sm:mt-0 font-semibold bg-red-600 rounded-md px-4 py-1 md:py-2 hover:scale-105 duration-500 text-xl md:text-2xl lg:text-3xl'>Zobacz na mapie</button>
          </a>          </div>
          <div className='text-lg md:text-xl lg:text-2xl font-light'>
            <p className='pt-5'>Czudner SPOT, ul. Łąkowa 35, Gdańsk, 22.00 - koncert Searching for Managment, potem afterparty - dla uczestników wejście free!</p>
          </div>
        </div>
        
    </div>
  )
}

export default Gdzie
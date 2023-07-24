import React from 'react'

function DlaczegoWarto() {
  const items = [
    {
      id: 1,
      arg: 'Świetni goście',
      text: '',
    },
    {
      id: 2,
      arg: 'Nagrody',
      text: 'Vouchery do sklepu muzycznego o wartości - I m-ce 1000 zł, II i III m-ce 500 oraz Nagroda Specjalna* od wytwórni 33records i zespołu Searching for Managment - wspólne nagranie utworu w studio w Poznaniu. (*Organizator zastrzega możliwość nie przyznania nagrody specjalnej; zasady przyznania nagrody specjalnej - w osobnym pdf)',
    },
    {
      id: 3,
      arg: 'Platforma do kooperacyjnego tworzenia muzyki',
      text: 'Teambuilding dla osób, które chcą działać z innymi (nawet jeśli się nie znają).',
    },
    {
      id: 4,
      arg: 'Dobra zabawa',
      text: 'Bo na MusicJam zawsze wszystko gra.',
    },
  ]


  return (
    <div className='py-6 md:py-10 lg:py-16'>
      <h2 className='text-2xl md:text-3xl lg:text-4xl pb-2'>Dlaczego warto wziąć udział?</h2> 
      {items.map((item) => (
        <div key={item.id} className='py-2 md:py-4 lg:py-6'>
            <h3 className='text-xl md:text-2xl lg:text-3xl'>{item.arg}</h3>
            <p className='text-lg md:text-xl lg:text-2xl font-light'>{item.text}</p>
        </div>
      ))}
      <div className='py-2 md:py-4 lg:py-6'>
        <h3 className='text-xl md:text-2xl lg:text-3xl'>Jury-Twoje prace ocenią: </h3>
        <div className='text-lg md:text-xl lg:text-32l font-light'>
        <p>Przedstawiciele Organizatora Wydarzenia: Karina Rojek (Instytut Kultury Miejskiej)
        Marcin Młyński (Fundacja Code:ME, Hackerspace Trójmiasto) 
        Łukasz Skotarek (Dreat Music&Code, Hackerspace Trójmiasto)</p>
        <p className='pt-4'>Oskar Pryczyniec (Jägspot)</p>
        <p className='pt-4'>DYGA, czyli Gosia Wojciechowska, DJ-ka (Klub Pro TONE)</p>
        <p className='pt-4'>Jakub Szwarc/Michał Ruksza (Zespół Searching for Management)</p>
        </div>
      </div>
    </div>
  )
}

export default DlaczegoWarto
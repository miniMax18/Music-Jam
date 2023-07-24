import React from 'react'

function ReuseMusic() {

  const links = [
    {
      url: 'https://polona.pl/',
      link: 'Polona.pl',
      text: ' -  wpisując nazwisko dowolnego kompozytora w wynikach wyszukiwania zawsze trafią się jakieś nuty np. Bach',
    }, {
      url: 'https://www.europeana.eu/en',
      link: 'Europeana.eu',
      text: ' -  europejska biblioteka cyfrowa i jej zbiory nagrań. Z części z nich możecie korzystać zupełnie swobodnie.',
    }, {
      url: 'https://archive.org/',
      link: 'Archive.org',
      text: ' -  internetowe archiwum zawierające bogatą kolekcję sampli wpisując np. Baroque.',
    }, {
      url: 'https://freemusicarchive.org/',
      link: 'freemusicarchive.org',
      text: ' -  internetowe archiwum muzyczne.',
    }, {
      url: 'https://musopen.org/',
      link: 'Musopen.org',
      text: ' -  serwis internetowy oferujący bogatą kolekcję muzyki klasycznej - w darmowej opcji konta możecie pobrać 5 plików dziennie',
    }, {
      url: '',
      link: '',
      text: 'Przede wszystkim nasze XVIII wieczne zaśpiewy. Mogą być np. elementem dźwiękowego pejzażu lub zostać wplecione w nieoczywisty sposób w wasz utwór muzyczny.',
    },
  ]

  return (
    <div className='py-6 md:py-10 lg:py-16'>
        <h2 className='text-2xl md:text-3xl lg:text-4xl'>Let's reUSE MUSIC!</h2>
        <div className='py-6'>
          <h3 className='text-xl md:text-2xl lg:text-3xl pb-6'>Brakuje materiałów muzycznych do projektu? IKM poleca zajrzeć w te źródła!</h3>
          <p className='text-lg md:text-xl lg:text-2xl font-light'>Zbiory cyfrowe i domena publiczna to niekończące się pasmo inspiracji dla twórców. 
          Na potrzeby MUSICJAM - proponujemy wam wykorzystanie muzyki dawnej z domeny publicznej i tej na wolnych licencjach - np.
          kompozycje największych klasyków lub utwory udostępnione przez twórców na wolnych licencjach.
          Zawsze zwróćcie uwagę czy wykonanie nie jest objęte prawami autorskimi majątkowymi!</p>
          <p className='text-lg md:text-xl lg:text-2xl font-light pt-4'>W Medialab Gdańsk zrekonstruowaliśmy XVIII wieczne zaśpiewy gdańskich ulicznych sprzedawców
          - są do pobrania i wykorzystania podczas hackathonu - udostępnione na CC-BY-SA na <a
           href='http://pracownia.medialabgdansk.pl/rekonstrukcja-zaspiewow-gdanskich-wywolywaczy/' target='_blank'
           className='font-normal underline'>link</a>
          </p>
        </div>
        <h3 className='text-xl md:text-2xl lg:text-3xl pb-4 pt-6'>Skąd wziąć muzykę/nuty do wykorzystania:</h3>
        {links.map((item, i) => (
            <div key={i} className='flex text-[24px] py-2 font-light'>
              <p className='text-lg md:text-xl lg:text-2xl'><a href={item.url} target='_blank' className='font-normal underline'>{item.link}</a>{item.text}</p>
            </div>
        ))}
    </div>
  )
}

export default ReuseMusic
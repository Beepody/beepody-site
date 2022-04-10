module.exports = async function () {

  const pages = [
    {
        "url": "/",
        "title": "Beepody",
        "photo": "/assets/Beepody.webp"
    },
    {
        "url": "/about/",
        "title": "About Beepody.com"
    },
    {
        "url": "/edit/",
        "title": "Beepody Editor"
    },
    {
        "url": "/beeps/",
        "title": "Beep Encyclopedia",
        "photo": "/assets/Beepody.webp"
    },
  ]

  const beeps = {
    constant: {
      path: 'constant',
      title: 'Default Beep',
      description: 'One beep fits all.'
    },
    coin: {
      path: 'coin',
      title: 'Mario coin',
      description: 'Cha-ching!'
    },
    'power-up': {
      path: 'power-up',
      title: 'Mario Power-up',
      description: 'Eat shrooms, grow up.'
    },
    mario: {
      path: 'mario',
      title: 'Mario intro',
      description: 'It\'s me, Mario!'
    },
    encounters: {
      path: 'encounters',
      title: 'Close Encounters of the Third Kind',
      description: '3'
    },
    'feel-good': {
      path: 'feel-good',
      title: 'Gorillaz - Feel Good Inc.',
      description: 'Sha, sha-beep-da, sha-beep-da-ca... feel good.'
    },
    'death-march': {
      path: 'death-march',
      title: 'Star Wars - Imperial Death March',
      description: 'Beep, I am your father.'
    },
    chain: {
      path: 'chain',
      title: 'Fleetwood Mac: The Chain - Bass Riff',
      description: 'You would never beep the chain.'
    }
  }

  for (const beep of Object.values(beeps)) {
    pages.push({
      url: `/${beep.path}/`,
      title: beep.title,
      photo: `/assets/thumbnails/${beep.path}.webp`
    })
  }

  return pages
}

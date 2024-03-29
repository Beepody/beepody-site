import { Beep, BeepSequence } from 'beepody'

export type BeepMelody = {
  slug: string
  title: string
  description: string
  sequence: BeepSequence
  displayUrl?: string
  thumbnailUrl?: string
  thumbnailLegacyUrl?: string
}

type BeepLibrary = {
  [key: string]: BeepMelody
}

const library: BeepLibrary = {
  'constant': {
    slug: 'constant',
    title: 'Default Beep',
    description: 'One beep fits all.',
    sequence: new BeepSequence([new Beep()]),
  },
  'coin': {
    slug: 'coin',
    title: 'Mario coin',
    description: 'Cha-ching!',
    sequence: new BeepSequence([
      // 600 988 1 1319 4
      new Beep(988, 100),
      new Beep(1319, 400),
    ]),
  },
  'power-up': {
    slug: 'power-up',
    title: 'Mario Power-up',
    description: 'Eat shrooms, grow up.',
    sequence: new BeepSequence([
      // 1750 523 1 392 1 523 1 659 1 784 1 1047 1 784 1 415 1 523 1 622 1 831 1 622 1 831 1 1046 1 1244 1 1661 1 1244 1 466 1 587 1 698 1 932 1 1175 1 1397 1 1865 1 1397 1
      // 60 / 1750 * 1000 = 34
      new Beep(523, 34),
      new Beep(392, 34),
      new Beep(523, 34),
      new Beep(659, 34),
      new Beep(784, 34),
      new Beep(1047, 34),
      new Beep(784, 34),
      new Beep(415, 34),
      new Beep(523, 34),
      new Beep(622, 34),
      new Beep(831, 34),
      new Beep(622, 34),
      new Beep(831, 34),
      new Beep(1046, 34),
      new Beep(1244, 34),
      new Beep(1661, 34),
      new Beep(1244, 34),
      new Beep(466, 34),
      new Beep(587, 34),
      new Beep(698, 34),
      new Beep(932, 34),
      new Beep(1175, 34),
      new Beep(1397, 34),
      new Beep(1865, 34),
      new Beep(1397, 34),
    ]),
  },
  'mario': {
    slug: 'mario',
    title: 'Mario intro',
    description: "It's me, Mario!",
    sequence: new BeepSequence([
      // 410 668 1 668 1 0 1 668 1 0 1 522 1 668 1 0 1 784 2 0 2 392 2
      new Beep(668, 100),
      new Beep(668, 100),
      new Beep(0, 100),
      new Beep(668, 100),
      new Beep(0, 100),
      new Beep(522, 100),
      new Beep(668, 100),
      new Beep(0, 100),
      new Beep(784, 200),
      new Beep(0, 200),
      new Beep(392, 200),
    ]),
  },
  'encounters': {
    slug: 'encounters',
    title: 'Close Encounters of the Third Kind',
    description: '3',
    sequence: new BeepSequence([
      // 400 880 2 988 2 783 2 392 2 587 3
      new Beep(880, 200),
      new Beep(988, 200),
      new Beep(783, 200),
      new Beep(392, 200),
      new Beep(587, 200),
    ]),
  },
  'feel-good': {
    slug: 'feel-good',
    title: 'Gorillaz - Feel Good Inc.',
    description: 'Sha, sha-beep-da, sha-beep-da-ca... feel good.',
    sequence: new BeepSequence([
      // 300 369 2 329 2 82 1 0 2 82 1 92 1 98 1 0 1 130 1 0 1 123 7
      new Beep(369, 400),
      new Beep(329, 400),
      new Beep(82, 200),
      new Beep(0, 400),
      new Beep(82, 200),
      new Beep(92, 200),
      new Beep(98, 200),
      new Beep(0, 200),
      new Beep(130, 200),
      new Beep(0, 200),
      new Beep(123, 1400),
    ]),
  },
  'death-march': {
    slug: 'death-march',
    title: 'Star Wars - Imperial Death March',
    description: 'Beep, I am your father.',
    sequence: new BeepSequence([
      // 480 440 4 440 4 440 4 349 3 523 1 440 4 349 3 523 1 440 8 659 4 659 4 659 4 698 3 523 1 415 4 349 3 523 1 440 8
      new Beep(440, 500, 3),
      new Beep(349, 375),
      new Beep(523, 125),
      new Beep(440, 500),
      new Beep(349, 375),
      new Beep(523, 125),
      new Beep(440, 1000),
      new Beep(659, 500, 3),
      new Beep(698, 375),
      new Beep(523, 125),
      new Beep(415, 500),
      new Beep(349, 375),
      new Beep(523, 125),
      new Beep(440, 1000),
    ]),
  },
  'chain': {
    slug: 'chain',
    title: 'Fleetwood Mac: The Chain - Bass Riff',
    description: 'You would never beep the chain.',
    sequence: new BeepSequence([
      // 304 55 5 0 1 55 1 62 1 65 2 62 1 55 1 49 1 55 1 62 2 41 8
      // 60 / 304 * 1000 ~= 197.368
      new Beep(55, 987),
      new Beep(0, 197),
      new Beep(55, 197),
      new Beep(62, 197),
      new Beep(65, 395),
      new Beep(62, 197),
      new Beep(55, 197),
      new Beep(49, 197),
      new Beep(55, 197),
      new Beep(62, 395),
      new Beep(41, 1579),
    ]),
  },
}

export default library

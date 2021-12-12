import {Beep, BeepSequence} from 'beepody/dist/tsc/main'

export type BeepMelody = {
  path: string;
  title: string;
  description: string;
  sequence: BeepSequence;
  displayUrl?: string;
  thumbnailUrl?: string;
  thumbnailLegacyUrl?: string;
}

type BeepLibrary = {
  [key:string]: BeepMelody;
}

const library: BeepLibrary = {
  constant: {
    path: 'constant',
    title: 'Default Beep',
    description: 'One beep fits all.',
    sequence: new BeepSequence([
      new Beep()
    ])
  },
  coin: {
    path: 'coin',
    title: 'Mario coin',
    description: 'Cha-ching!',
    sequence: new BeepSequence([
      new Beep(988, 100),
      new Beep(1319, 800)
    ])
  },
}

export default library

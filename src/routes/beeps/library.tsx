// import {BeepSequence} from 'beepody'

export type Beep = {
  path: string;
  title: string;
  description: string;
//  sequence: BeepSequence;
  displayUrl?: string;
  thumbnailUrl?: string;
  thumbnailLegacyUrl?: string;
}

type BeepLibrary = {
  [key:string]: Beep;
}

const library: BeepLibrary = {
  // constant: {
  //   path: 'beep',
  //   title: 'Default Beep',
  //   description: 'One beep fits all.',
  //   sequence: new BeepSequence([])
  // },
}

export default library

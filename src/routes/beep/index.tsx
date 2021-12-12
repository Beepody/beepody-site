import { createRef, FunctionalComponent, h } from 'preact'
import Helmet from 'react-helmet'
import NotFound from '../not-found'
import library from '../beeps/library'
import { BeepPlaque } from '../beeps/meta'
import { playBeepSequence } from 'beepody/dist/tsc/main'

interface Props {
  path: keyof typeof library;
}

const BeepProfile: FunctionalComponent<Props> = (props: Props) => {
  const { path } = props
  
  if (!(path in library)) {
    return <NotFound default />
  }
  const beep = library[path]

  const ref = createRef<HTMLElement>()

  const doBeep = (): void => {
    playBeepSequence(beep.sequence)
  }

  return (
    <section class="container py-5" ref={ref}>
      <Helmet><title>{beep.title}</title></Helmet>
      <div class="p-4 text-center">
        <button onClick={doBeep}>{beep.path}()</button>
      </div>
      <BeepPlaque path={beep.path} />
    </section>
  )
}

export default BeepProfile

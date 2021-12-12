import { createRef, FunctionalComponent, h } from 'preact'
import Helmet from 'react-helmet'
import library from './library'
import { BeepPlaque } from './meta'
import { playBeepSequence } from 'beepody/dist/tsc/main'

const BeepIndex: FunctionalComponent = () => {
  const ref = createRef()
  return <div class="row my-4" ref={ref}>
    <h2>Encyclopedia of Beep Melodies</h2>
    {Object.values(library).map((beep, i) => {

      const playBeep = (): void => {
        playBeepSequence(beep.sequence)
      }

      return (
        <div key={i} class="col-sm-6 col-md-4 mb-4">
          <BeepPlaque path={beep.path} />
          <div class="p-2 text-center">
            <button onClick={playBeep}>{beep.path}()</button>
          </div>
        </div>
      )
    })}
  </div>
}

const Beeps: FunctionalComponent = () => {
  return (
    <section class="container py-5">
      <Helmet>
        <title>Encyclopedia of Beep Melodies</title>
      </Helmet>
      <BeepIndex />
    </section>
  )
}

export default Beeps

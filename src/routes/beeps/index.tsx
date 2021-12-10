import { createRef, FunctionalComponent, h } from 'preact'
import Helmet from 'react-helmet'
import library from './library'
import { BeepPlaque } from './meta'

const BeepIndex: FunctionalComponent = () => {
  const ref = createRef()
  return <div class="row my-4" ref={ref}>
    <h2>Encyclopedia of Beep Melodies</h2>
    {Object.values(library).map((beep, i) => {
      return (
        <div key={i} class="col-sm-6 col-md-4 mb-4">
          <BeepPlaque path={beep.path} />
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

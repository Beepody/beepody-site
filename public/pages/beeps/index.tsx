import { createRef, FunctionalComponent } from 'preact'
import Helmet from 'react-helmet'
import library from './library'
import { BeepPlaque } from './meta'

const BeepIndex: FunctionalComponent = () => {
  const ref = createRef()
  return (
    <div class="row my-4" ref={ref}>
      <h2>Encyclopedia of Beep Melodies</h2>
      <p>
        A collection of tone definitions for use as{' '}
        <a href="https://www.gnu.org/software/grub/manual/grub/grub.html#play">
          <abbr title="GRand Unified Bootloader">GRUB</abbr>_INIT_TUNE
        </a>{' '}
        or for using the <a href="https://linux.die.net/man/1/beep">beep</a>{' '}
        command to beep in a script.
      </p>
      {Object.values(library).map((beep, i) => {
        return (
          <div key={i} class="col-sm-6 col-md-4 mb-4">
            <BeepPlaque slug={beep.slug} />
          </div>
        )
      })}
    </div>
  )
}

const Beeps: FunctionalComponent = () => {
  return (
    <section class="container py-5">
      <Helmet title="Encyclopedia of Beep Melodies"></Helmet>
      <BeepIndex />
    </section>
  )
}

export default Beeps

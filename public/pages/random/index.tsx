import Helmet from 'react-helmet'
import library, { BeepMelody } from '../beeps/library'

export const getRandomBeep = (): BeepMelody => {
  const paths = Object.keys(library)
  const path = paths[(Math.random() * paths.length) << 0]
  return library[path]
}

const Random = () => {
  const beep = getRandomBeep()
  if (typeof window !== 'undefined') {
    window.location.href = `/${beep.slug}/`
  }
  return (
    <section class="container py-5 text-center">
      <Helmet title="Random Beep"></Helmet>
      <p>Going to the "{beep.title}" beep...</p>
      <a
        class="btn btn-outline-primary btn-lg px-4 me-sm-3"
        href={`/${beep.slug}/`}>
        {beep.title}
      </a>
    </section>
  )
}

export default Random

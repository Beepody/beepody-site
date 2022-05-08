import { createRef, FunctionalComponent } from 'preact'
import Helmet from 'react-helmet'
import NotFound from '../../pages/_404.js'
import library from '../beeps/library'
import { BeepPlaque } from '../beeps/meta'

interface Props {
  slug: keyof typeof library
}

const BeepProfile: FunctionalComponent<Props> = (props: Props) => {
  const { slug } = props

  if (!(slug in library)) {
    return <NotFound default />
  }
  const beep = library[slug]

  const ref = createRef<HTMLElement>()

  return (
    <section class="container py-5 col-md-6 col-lg-3" ref={ref}>
      <Helmet title={beep.title}></Helmet>
      <BeepPlaque slug={beep.slug} />
    </section>
  )
}

export default BeepProfile

import { createRef, FunctionalComponent, h } from 'preact'
import Helmet from 'react-helmet'
import NotFound from '../not-found'
import library from '../beeps/library'
import { BeepPlaque } from '../beeps/meta'

interface Props {
  path: keyof typeof library;
}

const BeepProfile: FunctionalComponent<Props> = (props: Props) => {
  const { path } = props
  
  if (!(path in library)) {
    return <NotFound default />
  }
  console.log('beep:', library[path])
  const beep = library[path]

  const ref = createRef<HTMLElement>()

  const doBeep = (): void => {
    console.log('beep!')
  }

  // const polyrat = new Polyrat(beep.coefficients)

  return (
    <section ref={ref}>
      <Helmet><title>{beep.title}</title></Helmet>
      <BeepPlaque path={beep.path} />
      <button onClick={doBeep}>beep()</button>
    </section>
  )
}

export default BeepProfile

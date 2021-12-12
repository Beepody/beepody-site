import { FunctionalComponent, h } from 'preact'
import Helmet from 'react-helmet'

const About: FunctionalComponent = () => {
  return (
    <section class="container py-5">
      <Helmet title="About Beepody" />
      <h1>About Beepody</h1>
      <p>Beepody is an online community founded in 2021 which is dedicated to beeping.</p>
      <h2>Mission Statement</h2>
      <p>To beep. There is no question.</p>
    </section>
  )
}

export default About

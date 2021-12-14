import { FunctionalComponent, h } from 'preact'
import Helmet from 'react-helmet'
import { playDefaultBeep } from 'beepody/dist/tsc/main'

const Home: FunctionalComponent = () => {
  return (
    <section class="container">
      <Helmet title="Beepody" />
      <div class="px-4 py-5 my-5 text-center border-bottom">
        <h1 class="h4 fw-bold">Beepody</h1>
        <div class="col-lg-6 mx-auto">
          <p class="lead mb-4">Beep beep beep.</p>
          <p class="mb-4">Bloop.</p>
        </div>
        <h3>New</h3>
        <p>Try our new interactive beep:</p>
        <button onClick={playDefaultBeep} class="btn btn-primary">beep</button>
      </div>
    </section>
  )
}

export default Home

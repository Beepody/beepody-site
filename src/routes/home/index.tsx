import { FunctionalComponent, h } from 'preact'
import Helmet from 'react-helmet'

const Home: FunctionalComponent = () => {
  return (
    <section class="container">
      <Helmet title="Beepody Belongs You" />
      <div class="px-4 pt-5 my-5 text-center border-bottom">
        <h1 class="h4 fw-bold">Beepody</h1>
        <div class="col-lg-6 mx-auto">
          <p class="lead mb-4">Beep.</p>
          <p class="mb-4">Bloop.</p>
        </div>
      </div>
    </section>
  )
}

export default Home

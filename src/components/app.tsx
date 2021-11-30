import { FunctionalComponent, h } from 'preact'
import { Router } from 'preact-router'
import Helmet from 'react-helmet'

import Home from '../routes/home'
import About from '../routes/about'

import NotFound from '../routes/not-found'
import Header from './header'
import Footer from './footer'

const App: FunctionalComponent = () => {
  return (
    <div>
      <Helmet
        htmlAttributes={{lang: "en-CA"}}
        title="☯" titleTemplate="%s ♩ Beepody"
        titleAttributes={{itemProp: "name", lang: "en-CA"}}
        meta={[
          {name: "description", content: "Beepody is an online community dedicated to beepology and beep accessories."}
        ]}
        link={[
          {rel: "canonical", href: "https://beepody.com/"},
        ]}
      />
      <Header />
      <main>
        <Router>
          <Home path="/" />
          <About path="/about" />
          <NotFound path="/404" />
          <NotFound default />
        </Router>
      </main>
      <Footer />
    </div>
  )
}

export default App

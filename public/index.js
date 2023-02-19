import {
  LocationProvider,
  Router,
  Route,
  ErrorBoundary,
  hydrate,
  prerender as ssr,
} from 'preact-iso'
import Helmet from 'react-helmet'
import Header from './header'
import Footer from './footer'
import NotFound from './pages/_404'
import Home from './pages/home'
import About from './pages/about'
import Beeps from './pages/beeps'
import Editor from './pages/editor'
import Random from './pages/random'
import Beep from './pages/beep'

export function App() {
  return (
    <LocationProvider>
      <Helmet
        htmlAttributes={{ lang: 'en-CA' }}
        title="☯"
        titleTemplate="%s ♩ Beepody"
        titleAttributes={{ itemProp: 'name', lang: 'en-CA' }}
        meta={[
          {
            name: 'description',
            content:
              'An online community dedicated to beeps and beep accessories.',
          },
        ]}
        link={[{ rel: 'canonical', href: 'https://beepody.com/' }]}>
        <script type="application/ld+json">{`
        {
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Beepody",
            "legalName" : "Beepody Corporation",
            "url": "https://beepody.com",
            "logo": "https://beepody.com/assets/Beepody.png",
            "foundingDate": "2021",
            "founders": [
              {
              "@type": "Person",
              "name": "Dylan Ferris"
              }
            ],
            "email": "dylan@beepody.com"
        }
    `}</script>
      </Helmet>
      <div class="app">
        <Header />
        <ErrorBoundary>
          <main>
            <Router>
              <Route path="/" component={Home} />
              <Route path="/about/" component={About} />
              <Route path="/beeps/" component={Beeps} />
              <Route path="/editor/" component={Editor} />
              <Route path="/random/" component={Random} />
              <Route path="/:slug/" component={Beep} />
              <Route path="/404/" component={NotFound} />
              <Route default component={NotFound} />
            </Router>
          </main>
        </ErrorBoundary>
        <Footer />
      </div>
    </LocationProvider>
  )
}

hydrate(<App />)

/**
 * @param {import("preact").JSX.IntrinsicAttributes} data
 */
export async function prerender(data) {
  return await ssr(<App {...data} />)
}

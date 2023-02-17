import Helmet from 'react-helmet'

const NotFound = () => (
  <section class="container py-5">
    <Helmet title="Page Not Found" />
    <h1>Page Not Found — Error 404</h1>
    <p>Sorry, the page your request does not exist.</p>
    <a href="/">Home</a>
  </section>
)

export default NotFound

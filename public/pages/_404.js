import Helmet from 'react-helmet'

const NotFound = () => (
  <section class="container py-5">
    <Helmet title="Page Not Found" />
    <h1>Not Found — Error 404</h1>
    <p>Page not found.</p>
  </section>
)

export default NotFound

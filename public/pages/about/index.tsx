import Helmet from 'react-helmet'

const About = () => (
  <section class="container">
    <Helmet title="About Beepody" />
    <div class="px-4 pt-5 my-5 text-center border-bottom">
      <h1 class="h4 fw-bold">About Beepody</h1>
      <div class="col-lg-6 mx-auto">
        <p class="lead mb-4">Learn about this.</p>
      </div>
    </div>
  </section>
)

export default About

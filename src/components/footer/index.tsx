import { FunctionalComponent, h } from 'preact'

const Footer: FunctionalComponent = () => {
  return (
    <footer class="footer text-muted py-3 mt-5">
      <div class="container">
        <div class="row">
          <div class="col-sm-9 col-md-10">
            <p class="mb-2">© <time id="copyright-year">{new Date().getFullYear()}</time> <a class="text-muted text-decoration-none" href="https://beepody.com/">Beepody</a>.</p>
          </div>
          <div class="col-sm-5 col-md-2">
            <p class="float-end mb-2">
              <a class="text-muted text-decoration-none me-2" href="https://github.com/Beepody/beepody" target="_blank" rel="noreferrer" title="Source Code on GitHub" role="img" aria-label="Cat face in HTML source code tag">&lt;🐱/&gt;</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

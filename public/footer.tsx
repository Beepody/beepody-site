export default function Footer() {
  return (
    <footer class="footer text-muted py-3 mt-5">
      <div class="container">
        <div class="row">
          <div class="col-md-6">
            <p class="mb-2">
              © <time id="copyright-year">{new Date().getFullYear()}</time>
              <a class="text-muted text-decoration-none ms-1" href="/about/">
                Beepody Corporation
              </a>
              . All rights reserved.
            </p>
          </div>
          <div class="col-md-6">
            <p class="float-end mb-2">
              <a
                class="text-muted text-decoration-none me-2"
                href="https://github.com/beepody"
                target="_blank"
                rel="noreferrer"
                title="Source code"
                role="img"
                aria-label="Cat face">
                🐱
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

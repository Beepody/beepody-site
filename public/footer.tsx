export default function Footer() {
  return (
    <footer class="footer text-muted py-3">
      <div class="container">
        <p class="float-end mb-2">
          <a
            class="text-muted text-decoration-none me-2"
            href="https://github.com/Beepody"
            target="_blank"
            rel="noreferrer"
            title="Source Code on GitHub"
            role="img"
            aria-label="Cat face">
            🐱
          </a>
          <a
            class="text-muted text-decoration-none me-2"
            href="https://docs.beepody.com"
            target="_blank"
            rel="noreferrer"
            title="Documentation"
            role="img"
            aria-label="Document">
            🗎
          </a>
        </p>
        <p class="mb-2">
          © <time id="copyright-year">{new Date().getFullYear()}</time>{' '}
          <a
            class="text-muted text-decoration-none"
            href="https://beepody.com/">
            Beepody
          </a>
        </p>
      </div>
    </footer>
  )
}

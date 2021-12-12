import { FunctionalComponent, h } from 'preact'
import { useState } from 'preact/hooks'
import { Link } from 'preact-router/match'

const Header: FunctionalComponent = () => {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true)
  const handleNavCollapse = (): void => setIsNavCollapsed(!isNavCollapsed)
  return (
    <header>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container">
          <a class="navbar-brand" href="https://beepody.com/">
            Beepody
          </a>
          <span class="navbar-text text-white">
            Just beep it.
          </span>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#nav-menu" aria-controls="nav-menu" aria-expanded={!isNavCollapsed} aria-label="Toggle navigation" onClick={handleNavCollapse}>
            <span class="navbar-toggler-icon" />
          </button>
          <div class={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse`} id="nav-menu">
            <ul class="navbar-nav ms-auto">
              <li class="nav-item" data-bs-toggle="collapse" data-bs-target="#nav-menu">
                <Link class="nav-link text-white" href="/beeps/" activeClassName="active" onClick={handleNavCollapse}>
                  Beeps
                </Link>
              </li>              <li class="nav-item" data-bs-toggle="collapse" data-bs-target="#nav-menu">
                <Link class="nav-link text-white" href="/about" activeClassName="active" onClick={handleNavCollapse}>
                  About
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header

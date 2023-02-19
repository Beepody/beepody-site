import { useState } from 'preact/hooks'

export default function Header() {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true)
  const handleNavCollapse = (): void => setIsNavCollapsed(!isNavCollapsed)
  return (
    <header>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container">
          <a class="navbar-brand" href="/">
            Beepody
          </a>
          <span class="navbar-text text-white">Just beep it.</span>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#nav-menu"
            aria-controls="nav-menu"
            aria-expanded={!isNavCollapsed}
            aria-label="Toggle navigation"
            onClick={handleNavCollapse}>
            <span class="navbar-toggler-icon" />
          </button>
          <div
            class={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse`}
            id="nav-menu">
            <ul class="navbar-nav ms-auto">
              <li
                class="nav-item"
                data-bs-toggle="collapse"
                data-bs-target="#nav-menu">
                <a
                  class="nav-link text-white"
                  href="/beeps/"
                  onClick={handleNavCollapse}>
                  Beeps
                </a>
              </li>
              <li
                class="nav-item"
                data-bs-toggle="collapse"
                data-bs-target="#nav-menu">
                <a
                  class="nav-link text-white"
                  href="/random/"
                  onClick={handleNavCollapse}>
                  Random
                </a>
              </li>
              <li
                class="nav-item"
                data-bs-toggle="collapse"
                data-bs-target="#nav-menu">
                <a
                  class="nav-link text-white"
                  href="/editor/"
                  onClick={handleNavCollapse}>
                  Editor
                </a>
              </li>
              <li
                class="nav-item"
                data-bs-toggle="collapse"
                data-bs-target="#nav-menu">
                <a
                  class="nav-link text-white"
                  href="/about/"
                  onClick={handleNavCollapse}>
                  About
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}

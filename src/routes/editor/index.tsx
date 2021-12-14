import { createRef, FunctionalComponent, h } from 'preact'
import Helmet from 'react-helmet'

const BeepEditor: FunctionalComponent = () => {
  const ref = createRef<HTMLElement>()

  return (
    <section class="container py-5" ref={ref}>
      <Helmet><title>Beep Editor</title></Helmet>
      <h1>Beep Editor</h1>
      <h2>URL</h2>
      <textarea class="alert alert-dark w-100" />
      <h2>GRUB</h2>
      <textarea class="alert alert-dark w-100" />
      <h2>beep</h2>
      <textarea class="alert alert-dark w-100" />
      <h2>Metrics</h2>
      <ul>
        <li>
          Beeps: 69
        </li>
        <li>
          Length: 10 seconds
        </li>
      </ul>
    </section>
  )
}

export default BeepEditor

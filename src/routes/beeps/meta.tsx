import { playBeepSequence } from "beepody"
import { createRef, FunctionalComponent, h } from "preact"
import { Link } from "preact-router"
import Helmet from "react-helmet"
import library, { BeepMelody } from "./library"

interface BeepPlaqueProps {
  path: keyof typeof library;
}

export const BeepPlaque: FunctionalComponent<BeepPlaqueProps> = (props: BeepPlaqueProps) => {
  const { path } = props
  const beep = library[path]
  beep.displayUrl = `/${beep.path}`
  beep.thumbnailUrl = `/assets/thumbnails/${beep.path}.webp`
  beep.thumbnailLegacyUrl = `/assets/thumbnails/${beep.path}.png`
  const playBeep = (): void => {
    playBeepSequence(beep.sequence)
  }
  const ref = createRef()
  return <div class="card beep_plaque" ref={ref}>
    <a href={beep.displayUrl} aria-label="Profile">
      <picture>
        <source srcset={beep.thumbnailUrl} type="image/webp" />
        <source srcset={beep.thumbnailLegacyUrl} type="image/png" /> 
        <img src={beep.thumbnailLegacyUrl} class="card-img-top" alt={`Thumbnail for ${beep.title}`} />
      </picture>
    </a>
    <div class="card-body">
      <h5 class="card-title">
        <strong><em>{beep.title}</em></strong>
      </h5>
      <div class="p-4 text-center">
        <button onClick={playBeep}>{beep.path}()</button>
      </div>
      { beep.description ? <p class="card-text">{beep.description}</p> : '' }
      <p class="card-text">{beep.toString()}</p>
    </div>
  </div>
}

export const getRandomBeep = (): BeepMelody => {
  const paths = Object.keys(library)
  const path = paths[Math.random() * paths.length << 0]
  return library[path]
}

export const RandomBeep: FunctionalComponent = () => {
  const beep = getRandomBeep()
  if (typeof window !== 'undefined') {
    window.location.href = `/${beep.path}`
  }
  return (
    <section class="container py-5">
      <Helmet>
        <title>Random Beep</title>
      </Helmet>
      <p>Redirecting to the "{beep.title}" beep...</p>
      <Link class="btn btn-outline-primary btn-lg px-4 me-sm-3" href={`/${beep.path}`}>{beep.title}</Link>
    </section>
  )
}

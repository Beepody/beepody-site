import { createRef, FunctionalComponent } from 'preact'
import { Link } from 'preact-router'
import Helmet from 'react-helmet'
import library, { BeepMelody } from './library'
import { playBeepSequence } from 'beepody'

interface BeepPlaqueProps {
  slug: keyof typeof library
}

export const BeepPlaque: FunctionalComponent<BeepPlaqueProps> = (
  props: BeepPlaqueProps,
) => {
  const { slug } = props
  const beep = library[slug]
  beep.displayUrl = `/${beep.slug}/`
  beep.thumbnailUrl = `/assets/thumbnails/${beep.slug}.webp`
  beep.thumbnailLegacyUrl = `/assets/thumbnails/${beep.slug}.png`
  const playBeep = (): void => {
    playBeepSequence(beep.sequence)
  }
  const ref = createRef()
  return (
    <div class="card beep_plaque" ref={ref}>
      <a href={beep.displayUrl} aria-label="Profile">
        <picture>
          <source srcset={beep.thumbnailUrl} type="image/webp" />
          <source srcset={beep.thumbnailLegacyUrl} type="image/png" />
          <img
            src={beep.thumbnailLegacyUrl}
            class="card-img-top"
            alt={`Thumbnail for ${beep.title}`}
          />
        </picture>
      </a>
      <div class="card-body">
        <h5 class="card-title">
          <strong>
            <em>{beep.title}</em>
          </strong>
        </h5>
        <div class="p-4 text-center">
          <div class="btn-group">
            <button onClick={playBeep} class="btn btn-primary">
              play
            </button>
            <Link
              href={`/beep/#${JSON.stringify({ 0: beep.sequence.toHash() })}`}
              class="btn btn-secondary">
              edit
            </Link>
          </div>
        </div>
        {beep.description ? <p class="card-text">{beep.description}</p> : ''}
        <p class="card-text">GRUB Init Tune:</p>
        <pre class="p-2">
          <code>{beep.sequence.toGRUBInitTune()}</code>
        </pre>
        <p class="card-text">Beep Command:</p>
        <pre class="p-2">
          <code>{beep.sequence.toBeepCommand()}</code>
        </pre>
      </div>
    </div>
  )
}

export const getRandomBeep = (): BeepMelody => {
  const slugs = Object.keys(library)
  const slug = slugs[(Math.random() * slugs.length) << 0]
  return library[slug]
}

export const RandomBeep: FunctionalComponent = () => {
  const beep = getRandomBeep()
  if (typeof window !== 'undefined') {
    window.location.href = `/${beep.slug}/`
  }
  return (
    <section class="container py-5 text-center">
      <Helmet>
        <title>Random Beep</title>
      </Helmet>
      <p>Going to the "{beep.title}" beep...</p>
      <Link
        class="btn btn-outline-primary btn-lg px-4 me-sm-3"
        href={`/${beep.slug}/`}>
        {beep.title}
      </Link>
    </section>
  )
}

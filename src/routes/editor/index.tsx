import { parseBeepCommand, parseGRUBInitTune, playBeepSequence } from 'beepody/dist/tsc/beepody'
import { BeepSequence } from 'beepody/dist/tsc/main'
import { createRef, FunctionalComponent, h } from 'preact'
import { Link } from 'preact-router'
import { useState } from 'preact/hooks'
import Helmet from 'react-helmet'

type ParseSequenceFunction = (sequence: string) => BeepSequence
type SetSequenceFunction = (sequence: BeepSequence) => void
type SetStatusFunction = (status: string) => void

interface CodeEditorProps {
  code: string;
  parseSequence: ParseSequenceFunction;
  setSequence: SetSequenceFunction;
  setStatus: SetStatusFunction;
}

const CodeEditor: FunctionalComponent<CodeEditorProps> = (props: CodeEditorProps) => {
  const ref = createRef()
  const handleInput = (e: Event): void => {
    if (e.target instanceof HTMLTextAreaElement) {
      const sequence = props.parseSequence(e.target.value)
      props.setSequence(sequence)
      props.setStatus('Nice beep')
    }
  }

  return (
    <div ref={ref}>
      <textarea class="alert alert-dark w-100 font-monospace" onInput={handleInput}>{props.code}</textarea>
    </div>
  )
}

const BeepEditor: FunctionalComponent = () => {
  const ref = createRef<HTMLElement>()
  const [sequence, setSequence] = useState(new BeepSequence([]))
  const [status, setStatus] = useState('Loading...')
  const [GRUBCode, setGRUBCode] = useState('play 600 ')
  const [beepCode, setBeepCode] = useState('beep ')
  const handlePlayClick = (): void => {
    playBeepSequence(sequence)
  }
  const handleGRUBCodeUpdate = (sequence: BeepSequence): void => {
    setSequence(sequence)
    setBeepCode(sequence.toBeepCommand())
  }
  const handleBeepCodeUpdate = (sequence: BeepSequence): void => {
    setSequence(sequence)
    setGRUBCode(sequence.toGRUBInitTune())
  }

  return (
    <section class="container py-5" ref={ref}>
      <Helmet><title>Beep Editor</title></Helmet>

      <h1>Beep Editor</h1>

      <Link href="/about/#grub-format" type="button" class="btn btn-secondary float-end">GRUB Format</Link>
      <h2>GRUB Init Tune</h2>
      <CodeEditor code={GRUBCode} parseSequence={parseGRUBInitTune} setSequence={handleGRUBCodeUpdate} setStatus={setStatus} />
      
      <Link href="/about/#beep-format" class="btn btn-secondary float-end">Beep Format</Link>
      <h2>Beep Command</h2>
      <CodeEditor code={beepCode} parseSequence={parseBeepCommand} setSequence={handleBeepCodeUpdate} setStatus={setStatus} />

      <button onClick={handlePlayClick} type="button" class="btn btn-success float-end">Play</button>

      <h2>Status</h2>
      <p>{status}</p>
      <ul>
        <li>
          Beeps: {sequence.beeps.length}
        </li>
        <li>
          Play time: {Number(sequence.lengthInSeconds().toFixed(1))} seconds
        </li>
      </ul>
    </section>
  )
}

export default BeepEditor

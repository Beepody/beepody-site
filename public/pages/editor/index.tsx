import {
  parseBeepCommand,
  parseGRUBInitTune,
  playBeepSequence,
  BeepSequence,
} from 'beepody'
import { createRef, FunctionalComponent } from 'preact'
import { useState } from 'preact/hooks'
import Helmet from 'react-helmet'
//import useHashState from 'use-hash-state'

type ParseSequenceFunction = (sequence: string) => BeepSequence
type SetSequenceFunction = (sequence: BeepSequence) => void
type SetStatusFunction = (status: string) => void

interface CodeEditorProps {
  code: string
  parseSequence: ParseSequenceFunction
  setSequence: SetSequenceFunction
  setStatus: SetStatusFunction
}

const CodeEditor: FunctionalComponent<CodeEditorProps> = (
  props: CodeEditorProps,
) => {
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
      <textarea
        class="alert alert-dark w-100 font-monospace"
        onInput={handleInput}>
        {props.code}
      </textarea>
    </div>
  )
}

const BeepEditor: FunctionalComponent = () => {
  const ref = createRef<HTMLElement>()
  // const initialHashState = {0: ''}
  // const {state, setStateAtKey} = useHashState(initialHashState)
  // const initialSequence = state[0].length ? parseBeepHash(state[0]) : new BeepSequence([])
  const initialSequence = new BeepSequence([])
  const [sequence, setSequence] = useState(initialSequence)
  const [status, setStatus] = useState('Ready to beep')
  const [GRUBCode, setGRUBCode] = useState(initialSequence.toGRUBInitTune())
  const [beepCode, setBeepCode] = useState(initialSequence.toBeepCommand())
  const handlePlayClick = (): void => {
    playBeepSequence(sequence)
  }
  const handleGRUBCodeUpdate = (sequence: BeepSequence): void => {
    setSequence(sequence)
    // setStateAtKey(0, sequence.toHash())
    setBeepCode(sequence.toBeepCommand())
  }
  const handleBeepCodeUpdate = (sequence: BeepSequence): void => {
    setSequence(sequence)
    // setStateAtKey(0, sequence.toHash())
    setGRUBCode(sequence.toGRUBInitTune())
  }
  return (
    <section class="container py-5" ref={ref}>
      <Helmet title="Beep Editor"></Helmet>

      <h1>Beep Editor</h1>

      <a
        href="/about/#grub-format"
        type="button"
        class="btn btn-secondary float-end">
        GRUB Format
      </a>
      <h2>GRUB Init Tune</h2>
      <CodeEditor
        code={GRUBCode}
        parseSequence={parseGRUBInitTune}
        setSequence={handleGRUBCodeUpdate}
        setStatus={setStatus}
      />

      <a href="/about/#beep-format" class="btn btn-secondary float-end">
        Beep Format
      </a>
      <h2>Beep Command</h2>
      <CodeEditor
        code={beepCode}
        parseSequence={parseBeepCommand}
        setSequence={handleBeepCodeUpdate}
        setStatus={setStatus}
      />

      <button
        onClick={handlePlayClick}
        type="button"
        class="btn btn-success float-end">
        Play
      </button>

      <h2>Status</h2>
      <p>{status}</p>
      <ul>
        <li>Beeps: {sequence.beeps.length}</li>
        <li>
          Play time: {Number(sequence.lengthInSeconds().toFixed(1))} seconds
        </li>
      </ul>
    </section>
  )
}

export default BeepEditor

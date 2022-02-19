import { parseBeepCommand, parseGRUBInitTune } from 'beepody/dist/tsc/beepody'
import { BeepSequence } from 'beepody/dist/tsc/main'
import { createRef, FunctionalComponent, h } from 'preact'
import { useState } from 'preact/hooks'
import Helmet from 'react-helmet'

type ParseSequenceFunction = (sequence: string) => BeepSequence
type SetSequenceFunction = (sequence: BeepSequence) => void

interface CodeEditorProps {
  code: string;
  parseSequence: ParseSequenceFunction;
  setSequence: SetSequenceFunction;
}

const CodeEditor: FunctionalComponent<CodeEditorProps> = (props: CodeEditorProps) => {
  const ref = createRef()
  const [code, setCode] = useState(props.code)
  const handleInput = (): void => {
    setCode(code)
    const sequence = props.parseSequence(code)
    props.setSequence(sequence)
  }

  return (
    <div ref={ref}>
      <textarea class="alert alert-dark w-100" onInput={handleInput}>{code}</textarea>
    </div>
  )
}

const BeepEditor: FunctionalComponent = () => {
  const ref = createRef<HTMLElement>()
  const [sequence, setSequence] = useState(new BeepSequence([]))
  const [status, setStatus] = useState('Loading...')

  return (
    <section class="container py-5" ref={ref}>
      <Helmet><title>Beep Editor</title></Helmet>

      <h1>Beep Editor</h1>

      <h2>GRUB Init Tune</h2>
      <CodeEditor code={sequence.toGRUBInitTune()} parseSequence={parseGRUBInitTune} setSequence={setSequence} setStatus={setStatus} />
      
      <h2>Beep Command</h2>
      <CodeEditor code={sequence.toBeepCommand()} parseSequence={parseBeepCommand} setSequence={setSequence} setStatus={setStatus} />

      <button type="button" class="btn btn-success float-end">Play</button>

      <h2>Status</h2>
      <p>{status}</p>

      <h2>Metrics</h2>
      <ul>
        <li>
          Beeps: {sequence.beeps.length}
        </li>
        <li>
          Play time: {sequence.lengthInSeconds()} seconds
        </li>
      </ul>
    </section>
  )
}

export default BeepEditor

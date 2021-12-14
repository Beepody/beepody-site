import { FunctionalComponent, h } from 'preact'
import Helmet from 'react-helmet'

const About: FunctionalComponent = () => {
  return (
    <section class="container py-5">
      <Helmet title="About Beepody" />
      <h1>About Beepody</h1>
      <p>Beepody is an online community dedicated to beeping which was founded in 2021.</p>
      <h2>Mission Statement</h2>
      <p>To beep. There is no question.</p>
      <h2>Beep Formats</h2>
      <h3><abbr title="GRand Unified Bootloader">GRUB</abbr> Init Tune</h3>
      <p>The GRUB format can be used for the <a href="https://www.gnu.org/software/grub/manual/grub/grub.html#play">GRUB_INIT_TUNE</a> setting to play the beep sequence every time you boot your computer.</p>
      <p>GRUB_INIT_TUNE uses this format:</p>
      <div class="alert alert-dark"><samp>tempo freq duration [freq duration freq duration...]</samp></div>
      <dl class="row">
        <dt><samp>tempo</samp></dt><dd>The base time for all note durations in beats per minute.</dd>
        <dt><samp>freq</samp></dt><dd>The frequency of the note in hertz. 262 is middle C. 0 means silence.</dd>
        <dt><samp>duration</samp></dt><dd>The duration of the note in bars. The length of the note in seconds is (60 ÷ tempo × duration).</dd>
        <dt><samp>[freq duration freq duration...]</samp></dt><dd>Subsequent notes.</dd>
      </dl>
      <h3><abbr title="command line interface">CLI</abbr> Beep Sequence</h3>
      <p>The beep format can be passed to the <a href="https://linux.die.net/man/1/beep">beep</a> command to beep in scripts on the Linux command line.</p>
      <p>beep uses this format:</p>
      <div class="alert alert-dark"><samp>beep -f freq -r repeats -d delay -l duration</samp></div>
      <dl class="row">
        <dt><samp>-f N</samp></dt><dd>The frequency of the note in hertz. 0 &lt; N &gt; 20000.</dd>
        <dt><samp>-l N</samp></dt><dd>The duration of the note in milliseconds.</dd>
        <dt><samp>-r N</samp></dt><dd>The number of repetitions, defaulting to one.</dd>
        <dt><samp>-d N</samp></dt><dd>The delay between repetitions in milliseconds.</dd>
        <dt><samp>-n</samp></dt><dd>Start a new beep.</dd>
      </dl>
    </section>
  )
}

export default About

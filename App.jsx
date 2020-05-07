import { h, render } from 'preact'
import Other from './Other.jsx'

function App() {
  return (
    <div>
      <h2>App!</h2>
      <Other />
    </div>
  )
}
render(<App />, document.getElementById('app'))

import { useState } from 'react'
import './App.css'

function App() {
  const [btn, setBtn] = useState(true)

  return (
    <>
      {/* {btn ? <h1>Vite + React</h1> : ""} */}

      {btn && <h1>Vite + React</h1>}

      <button onClick={() => { setBtn(false) }}>Hide Text</button>
    </>
  )
}
export default App
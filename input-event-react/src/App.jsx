import { useState } from 'react'
import './App.css'

function App() {
  const [name, setname] = useState([])

  const handleChange = (e) => {
    setname(e.target.value)
    console.log(e.target.value)
  }

  return (
    <>
      <input type='text' value={name} onChange={handleChange} />
    </>
  )
}
export default App
import { useState, useEffect, useRef } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const a = useRef(0)

  useEffect(() => {
    a.current = a.current + 1
    console.log(a.current)
  }, [count])

  return (
    <button onClick={() => setCount((count) => count + 1)}>
      count is {count}
    </button>
  )
}
export default App
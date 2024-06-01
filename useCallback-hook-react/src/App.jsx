import { useState, useCallback } from 'react'
import './App.css'
import Navbar from './components/Navbar'

function App() {
  const [count, setCount] = useState(0)

  const setColor = useCallback(() => {
    return "pink"
  }, [])

  // const setColor = () => {
  //   return "pink"
  // }

  return (
    <>
      <Navbar color={'red'} setColor={setColor} />
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </>
  )
}
export default App
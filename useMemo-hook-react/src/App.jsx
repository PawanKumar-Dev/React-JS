import { useState, useMemo } from 'react'
import './App.css'

const nums = new Array(30_000_000).fill(0).map((_, i) => {
  return {
    index: i,
    isMagical: i === 29_000_000
  }
})

function App() {
  const [count, setCount] = useState(0)
  const [numbers, setNumbers] = useState(nums)
  const magical = useMemo(() => numbers.find(item => item.isMagical === true), [])

  return (
    <>
      <h4>Magic number: {magical.index}</h4>
      <button onClick={() => setCount((count) => count + 1)}>
        count is {count}
      </button>
    </>
  )
}
export default App
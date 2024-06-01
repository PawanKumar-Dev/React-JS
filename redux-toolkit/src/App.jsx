import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from './redux/counter/counterSlice.js'

function App() {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <>
      <Navbar />
      <div className="card">
        <button onClick={() => dispatch(decrement())}>-</button>
        count is {count}
        <button onClick={() => dispatch(increment())}>+</button>
      </div>
    </>
  )
}
export default App
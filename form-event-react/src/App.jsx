import { useState } from 'react'
import './App.css'

function App() {
  const [form, setForm] = useState({
    name: '',
    password: ''
  })

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
    console.log(form)
  }

  return (
    <>
      <input type='text' name='name' value={form.name} onChange={handleChange} />
      <input type='text' name='password' value={form.password} onChange={handleChange} />
    </>
  )
}
export default App
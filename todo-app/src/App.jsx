import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import './App.css'
import Navbar from './components/Navbar'

function App() {
  const [inputData, setInputData] = useState('')
  const [todoList, setTodoList] = useState([])

  const handleInput = (e) => {
    setInputData(e.target.value)
  }

  const handleAdd = () => {
    setTodoList([...todoList, { id: uuidv4(), text: inputData, isCompleted: false }])
    setInputData('')
  }

  const handleCheckbox = (e) => {
    let id = e.target.name
    setTodoList(todoList.map((item) => {
      return item.id = id ? { ...item, isCompleted: !item.isCompleted } : item
    }))
  }

  const handleEdit = () => {
    console.log('Edit Clicked')
  }

  const handleDelete = (e, id) => {
    setTodoList(todoList.filter((item) => {
      return item.id != id
    }))
  }

  return (
    <>
      <Navbar />
      <div className='container mx-auto rounded-xl my-5 p-5 bg-violet-200 min-h-[80vh]'>
        <div className='flex justify-center mb-6'>
          <h2 className='p-2 font-bold'>Add Todo</h2>
          <input className='w-4/6 rounded px-3' type='text' value={inputData} onChange={handleInput} />
          <button onClick={handleAdd} className='bg-purple-700 hover:bg-purple-800 py-1 px-12 text-white rounded mx-4'>Add</button>
        </div>

        <div className='saved-todo p-6 border-t-2 border-red-500'>
          {todoList.map((item, index) => (
            <div key={index} className='flex justify-between px-3 py-2 my-2 bg-violet-50 rounded-xl'>
              <div className='flex'>
                <input type='checkbox' name={item.id} onChange={handleCheckbox} />
                <p className={item.isCompleted ? "line-through py-1 px-2" : "py-1 px-2"}>{item.text}</p>
              </div>

              <div className='button-group'>
                <button onClick={handleEdit} className='bg-purple-700 hover:bg-purple-800 py-1 px-8 text-white rounded mx-4'>Edit</button>
                <button onClick={(e) => { handleDelete(e, item.id) }} className='bg-purple-700 hover:bg-purple-800 py-1 px-8 text-white rounded mx-4'>Delete</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
export default App
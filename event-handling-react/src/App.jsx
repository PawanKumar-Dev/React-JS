import './App.css'

function App() {
  const alertEvent = () => {
    alert("Click Event Fired!")
  }

  return (
    <>
      <button onClick={alertEvent}>Click Events</button>
    </>
  )
}
export default App
import './App.css'
import Card from './components/Card'
import Footer from './components/Footer'
import Navbar from './components/Navbar'

function App() {
  return (
    <>
      <Navbar />
      <div className='content'>
        <Card title='Card 1' desc='card description for 1' />
        <Card title='Card 2' desc='card description for 2' />
        <Card title='Card 3' desc='card description for 3' />
        <Card title='Card 4' desc='card description for 4' />
      </div>
      <Footer />
    </>
  )
}

export default App
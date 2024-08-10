import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
function App() {

  return (

    <>
      <Navbar />
      <h1 className='flex justify-center items-center h-screen text-cyan-50 text-8xl'>Hello World</h1>
      <Home />
    </>
  )
}

export default App


import './App.css'
import { Outlet } from 'react-router-dom'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
function App() {
  return (
    <>
      <div className='min-h-screen flex flex-wrap content-between bg-gray-200'>
      <div className='w-full block'>
        <Header/>
        <main >
        <Outlet/> 
        </main>
        <Footer/>
      </div>
    </div>
    </>
  )
}

export default App

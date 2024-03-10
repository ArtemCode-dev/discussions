import { Routes, Route } from 'react-router-dom'
import './App.scss'
import Header from './components/Header/Header'
import Leftbar from './components/Leftbar/Leftbar'
import Rightbar from './components/Rightbar/Rightbar'

function App() {

  return (
    <>
      <Header />
      <div className='content'>
        <Leftbar />
        <div className=' h-[3000px] col-span-10'>
          <Routes>
            <Route
              path="/"
              element={<>Home</>}
            />
            <Route
              path="/news"
              element={<>News</>}
            />
          </Routes>
        </div>
        <Rightbar />
      </div>
    </>
  )
}

export default App

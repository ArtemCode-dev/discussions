import { Routes, Route } from 'react-router-dom'
import './App.scss'
import Header from './components/layout/Header/Header'
import Leftbar from './components/layout/Leftbar/Leftbar'
import Rightbar from './components/layout/Rightbar/Rightbar'

function App() {

  return (
    <>
      <Header />
      <div className='content'>
        <Leftbar />
        <div className=' h-[3000px] col-span-9'>
          <Routes>
            <Route
              path={"/"}
              element={<>Home</>}
            />
            <Route
              path={"/home"}
              element={<>Home</>}
            />
            <Route
              path="/news"
              element={<>News</>}
            />
            <Route
              path="/all"
              element={<>All</>}
            />
            <Route
              path="/popular"
              element={<>Popular</>}
            />
          </Routes>
        </div>
        <Rightbar />
      </div>
    </>
  )
}

export default App

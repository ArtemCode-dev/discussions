import './App.scss'
import Header from './components/Header/Header'
import Leftbar from './components/Leftbar/Leftbar'
import Rightbar from './components/Rightbar/Rightbar'

function App() {

  return (
    <>
      <Header />
      <div>
        <Leftbar />
        
        <Rightbar />
      </div>
    </>
  )
}

export default App

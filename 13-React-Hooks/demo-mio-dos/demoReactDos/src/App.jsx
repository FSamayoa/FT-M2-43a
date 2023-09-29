
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Cards from './components/cards/Cards'
import Counta from './components/counta/Counta'
import Detail from './components/detail/Detail'

function App() {


  return (
    <div>
      <Routes>
        <Route path='/home' element={<Cards />}/>
        <Route path='/contador' element={<Counta />}/>
        <Route path='/detail/:id' element={<Detail />}/>
      </Routes>
    </div>
  )
}

export default App

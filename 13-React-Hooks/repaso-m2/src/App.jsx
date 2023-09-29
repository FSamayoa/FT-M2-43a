import './App.css'
import Cards from './components/cards/Cards';
import { Routes, Route } from "react-router-dom";
import Detail from './components/detail/Detail';
import Nav from './components/nav/Nav';
import Form from './components/form/Form';

function App() {

  return (
    <>
      <Nav/>
      <Routes>
        <Route path='/home' element={<Cards/>} />
        <Route path='/detail/:id' element={<Detail/>} />
        <Route path='/form' element={<Form/>} />
      </Routes>
    </>
  )
}

export default App

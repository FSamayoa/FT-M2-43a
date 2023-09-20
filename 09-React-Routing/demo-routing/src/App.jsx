import './App.css'
import { Routes, Route } from "react-router-dom";
import Home from './components/Home';
import About from './components/About';
import Profile from './components/Profile';
import Person from './components/Person';
function App() {

  return (
    <div>
      <Home/>
      <Routes>
        {/* <Route path='' element={<Home/>} /> */}
        <Route path='/about' element={<About/>} />
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/deta/:id' element={<Person/>} />
      </Routes>
    </div>
  )
}

export default App

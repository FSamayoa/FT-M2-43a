import './App.css';
import { useEffect } from 'react';
import { useDispatch } from "react-redux";
import { getAllUsers } from './redux/actions/actions';
import Cards from './components/cards/Cards';
import { Routes, Route } from "react-router-dom";
import Detail from './components/detail/Detail';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllUsers());
  }, []);

  return (
    <div>
      <Routes>
        <Route path='/' element={<Cards/>} />
        <Route path='/detail/:id' element={<Detail/>} />
      </Routes>
    </div>
  )
}

export default App

import './App.css'
import Counter from './components/counter/Counter'
import Cards from './components/cards/Cards'
import { useFetch } from './hooks/useFetch'

function App() {

  const { data } = useFetch('https://rickandmortyapi.com/api/character/');

  console.log(data);

  return (
    <div>
      {/* <Counter/> */}
      <Cards/>
    </div>
  )
}

export default App

import { createStore } from "redux";
import reducer from "./reducer";

// {
//     name: 'Juan',
//     cohorte: '43a',
//     number: 1
// }

const store = createStore(reducer);

store.dispatch({ type: 'AUMENTAR_NUMBER' });
store.dispatch({ type: 'CAMBIAR_NOMBRE', payload: {name:'Juan', cohorte:'43a'}});

console.log(store.getState());
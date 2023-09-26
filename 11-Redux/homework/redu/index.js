import {createStore} from "redux";

const inicialState = {  //*estado global inicializado
    name:'Fer',
    cohorte:'ft43a',
    number:0
}


                //*le digo que el estado inicial sera el objeto 
                //*de arriba
const reducer = (state = inicialState, action)=>{ //*reducer dentro de store, es el unico que puede modificar el estado global mediante un dispatch
    if (action.type === "AUMENTAR_NUMBER") {
        return {
            ...state,
            number: state.number + 1
        }
    }
    if (action.type === "NUEVO_NOMBRE"){
        return {
            ...state,
            name: action.payload.name,
            cohorte: action.payload.cohorte
        }
    }
}

const store =createStore(reducer) //*se crea la store y se pone en reducer dentro

const action = {type: "AUMENTAR_NUMBER"}
const action2 = {type: "NUEVO_NOMBRE", payload: {name: "juanito", cohorte:"la mejor"}}

store.dispatch(action) //*mediante el dispatch envio la action (objeto con la infrmacion del cambio)
store.dispatch(action2)

console.log(store.getState())


//? state: "tengo hambre"
//? action: seleccionar comida por la app
//? dispatch: confirmo mi pedido, se envia al store donde esta quien prepara (reducer)
//? reducer: prepara el pedido (actualiza)
//? repartidor: regresa con el estado actualizado
//? state: "ya no tengo hambre"


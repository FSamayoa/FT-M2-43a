const { createStore } = require("redux");
const contador = require("./reducer");
const { incremento, decremento } = require("./actions");

// En esta línea creamos nuestro store. Pasándole como parámetro nuestro Reducer
const store = createStore(contador);
console.log (store.getState())
// Obtenemos el elemento con el id `valor`.
const valor = document.getElementById("valor")

// Esta función nos va a servir para actualizar nuestro DOM con el valor que tengamos en nuestro Store.
// En el primer render y cada vez que nos subscribamos al Store.
// Utilizamos el elemento obtenido arriba para mostrar el State.
function renderContador() {

  const contador = store.getState().contador
  valor.textContent = contador
  // Obtenemos la propiedad 'contador' de nuestro store:
  // Seteamos el número obtenido como texto dentro del elemento con id 'valor':
}

// Ejecutamos la función 'renderContador':
renderContador()

// Nos subscribimos al store pasándole la misma función. Así cada vez que llegue una acción, ejecutamos la función:
store.suscribe(renderContador)
// Por último, utilizamos los botones de nuestro HTML para que cada vez que hagamos click,
// hagan un dispatch al store de la acción correspondiente:

// Obtén referencias a los botones por su ID
const incrementarButton = document.getElementById('incrementar');
const decrementarButton = document.getElementById('decrementar');

// Agrega eventos de clic a los botones
incrementarButton.addEventListener('click', () => {
  // Realiza un dispatch de la acción de incremento al hacer clic en el botón
  store.dispatch(incremento());
});

decrementarButton.addEventListener('click', () => {
  // Realiza un dispatch de la acción de decremento al hacer clic en el botón
  store.dispatch(decremento());
});
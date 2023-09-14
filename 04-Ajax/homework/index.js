const URL = "http://localhost:5000/amigos"
const imagen = document.getElementsByTagName("img")[0]
imagen.id = "image"
imagen.style.display = "none";



const verAmigos = document.getElementById("boton")
verAmigos.addEventListener("click", verAmix)

function verAmix() {
    imagen.style.display = ""
    $.get(URL, crearLi)
    imagen.style.display = "none";
}

const crearLi = function (data) {
    const ul = document.getElementById("lista")
    ul.innerHTML = "";
    data.forEach(elementoLista => {
        const listaAmix = document.createElement("li")
        listaAmix.innerHTML = (elementoLista.name)
        ul.appendChild(listaAmix)

    });

}
//?????????????????????????????????????????????????????
//*************************************************** */
//?boton buscar amigo

const valorBuscar = document.getElementById('input')


const mostrarUser = function (data) {
    const amigo = document.getElementById('amigo')
    amigo.innerHTML = ` -->  ${data.name} - ${data.email}`

}


const botonBuscar = function () {
    $.get(`${URL}/${valorBuscar.value}`, mostrarUser)
}


const buscar = document.getElementById('search')
buscar.addEventListener('click', botonBuscar)


//??????????????????????????????????????????????????
//*************************************************** */
//?boton borrar amigo

const valorBorrar = document.getElementById('inputDelete')



const botonborrar = function () {
    $.ajax({
        url: `${URL}/${valorBorrar.value}`,
        method: 'DELETE', // Ejemplo: 'GET', 'POST', 'PUT', 'DELETE', etc.
        data: {}, // Datos que deseas enviar al servidor en la solicitud (opcional)
        success: function (data) {
            
            alert("la eliminacion se realizo con exito")
            // Función que se ejecuta cuando la solicitud es exitosa
            // 'data' contiene los datos de respuesta del servidor
            verAmix()
        }
    })
}

const botonDelete = document.getElementById('delete')
botonDelete.addEventListener('click', botonborrar)

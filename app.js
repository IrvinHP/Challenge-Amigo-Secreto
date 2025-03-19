// Arreglo para nombres de los amigos
let amigos = [];

// Función que agrega amigos
function agregarAmigo()
{
    let nombreAmigo = document.getElementById('amigo').value;

    // Valida si el nombre esta vacío o si tiene algún número
    if (nombreAmigo.trim() === "" || /\d/.test(nombreAmigo))
    {
        alert("Por favor, inserte un nombre válido.")
    }
    else
    {
        // Agrega el nombre del amigo al arreglo de nombres
        amigos.push(nombreAmigo);
    }

    // Llamamos a la función para restablecer el cuadro de texto a una cadena vacía
    limpiarNombre();
}

// Función que restablece el cuadro de texto a una cadena vacía
function limpiarNombre()
{
    document.querySelector('#amigo').value = "";
}

// Función que actualiza la lista de amigos HTML
function actualizarLista()
{
    // Obtener el elemento de la lista HTML donde se mostrarán los amigos
    let lista = document.getElementById("listaAmigos");

    // Limpiar la lista existente para evitar duplicados
    lista.innerHTML = "";

    // Iterar sobre el arreglo 'amigos'
    for (let i = 0; i < amigos.length; i++)
    {
        // Crear un nuevo elemento <li>
        let elemento = document.createElement("li");

        // Agregar el nombre del amigo como texto dentro del <li>
        elemento.textContent = amigos[i];

        // Agregar el elemento <li> a la lista
        lista.appendChild(elemento);
    }
}
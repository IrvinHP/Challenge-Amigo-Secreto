let amigos = [];

//Función que agrega amigos
function agregarAmigo()
{
    let nombreAmigo = document.getElementById('amigo').value;

    //Valida si el nombre esta vacío o si tiene algún número
    if (nombreAmigo.trim() === "" || /\d/.test(nombreAmigo))
    {
        alert("Por favor, inserte un nombre válido.")
    }
    else
    {
        amigos.push(nombreAmigo);
    }

    //Llamamos a la función para restablecer el cuadro de texto a una cadena vacía
    limpiarNombre();
}

//Función que restablece el cuadro de texto a una cadena vacía
function limpiarNombre()
{
    document.querySelector('#amigo').value = "";
}


//Añado un evento 'click' al boton por medio del id 'enter'
document.getElementById("enter").addEventListener("click", Conversion)

//Añado un evento 'keypress' al mismo boton pero NO FUNCIONA :(
document.getElementById("enter").addEventListener("keypress", Conversion)

//Funcion que realiza el calculo de las divisas
function Conversion() {
    let pesos = document.getElementById('pesos').value;
    let dolares = 151.19;
    let resultado;
    resultado = pesos / dolares
    return alert(`El equivalente de ARS$${pesos} en USD es: $${resultado.toFixed(2)}`)
}


// Variable definida para capturar la tecla enter. NO FUNCIONA :(
let enter = document.getElementById("enter")

enter.onkeydown = () => {Conversion()}





/*

// Prueba de funcion para llamar a la funcion conversion, agregando el 'onkeydown: "enterPressed(event)" 
// en la etiqueta button en el HTML. NO FUNCIONA :(

function enterPressed(event) {
    let boton = event.wich

    if (boton = event.wich(enter)) {
        Conversion()
    }
}

*/


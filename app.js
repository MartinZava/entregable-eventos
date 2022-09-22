
//Funcion que realiza el calculo de las divisas
function conversion() {
    let pesos = document.getElementById('pesos').value;
    let dolares = 151.19;
    let resultado;
    resultado = pesos / dolares
    return alert(`El equivalente de ARS$${pesos} en USD es: $${resultado.toFixed(2)}`)
}

// Variables para capturar la tecla enter
let enter = document.getElementById("enter")
let pesosEnter = document.getElementById("pesos")
let pesosNoDef = document.querySelector("pesosNoDef")


// Funcion que captura el click
enter.onclick = () => {conversion()}

// Funcion que captura el enter
pesosEnter.onkeydown = (e) => {
    if(e.key == "Enter") {
        conversion()
    }
}

// Funcion que previene el evento por defecto de la tecla enter (perdon si esta mal explicado, pero creo que se entiende)
pesosNoDef.onsubmit = (e) => {
    e.preventDefault()
}




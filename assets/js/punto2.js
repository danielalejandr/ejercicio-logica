function sumatoria_ejercicio1() {
    let sumatoria_total = document.querySelector("#numero_ejercicio").value
    let operacion_total = 0
    for (let i = 1; i <= sumatoria_total; i++) {
        operacion_total = operacion_total + i
    }
    document.querySelector("#total_sumatoria_resultado").innerHTML = `
            La sumatoria total es ${operacion_total}
        `
}

function ejercicio2() {
    let numero = document.querySelector("#numero_ejercicio2").value
    if (numero % 2 == 0) {
        document.querySelector("#resultado2").innerHTML = `
            El numero ${numero} es par
        `
    } else {
        document.querySelector("#resultado2").innerHTML = `
            El numero ${numero} es impar
        `
    }

}

function ejercicio3() {
    let edad = document.querySelector("#numero_ejercicio3").value
    let sexo = document.querySelector("#numero_ejercicio3_2").value
    console.log(edad)
    if (edad <= 10 && edad > 0) {
        Swal.fire(
            'Ganaste?',
            'Reclama un jugo',
            'success'
        )
    } else if (edad >= 18) {
        Swal.fire(
            'Ganaste?',
            'Reclama una cerveza',
            'success'
        )
        if (sexo == "M") {
            Swal.fire(
                'Ganaste?',
                'Reclama una cerveza y una porcion de pizza Hawaiana',
                'success'
            )
        }
        if (sexo == "H") {
            Swal.fire(
                'Ganaste?',
                'Reclama una cerveza y una porcion de pizza de tres carnes',
                'success'
            )
        }
    } else {
        Swal.fire(
            'Perdiste?',
            'No puedes reclamar ningun premio',
            'error'
        )
    }

}

let total = 0
let menu = [
    {
        nombre: "coca-cola",
        precio: 3500
    },
    {
        nombre: "postobon",
        precio: 1500
    },
    {
        nombre: "fanta",
        precio: 2000
    },
    {
        nombre: "jugo hit",
        precio: 2500
    },
    {
        nombre: "pepsi",
        precio: 1800
    }
]
function ejercicio4() {
    let palabra = document.querySelector("#numero_ejercicio4").value

    if (palabra == "pagar") {

        document.querySelector("#resultado4").innerHTML = `
            total a pagar ${total} 
        `
        total = 0
    } else {
        menu.forEach(key => {
            if (palabra == key.nombre) {
                total += key.precio
            }
        })
    }
}

let total_suma = 0
let multi = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
function ejercicio5() {
    let numero = document.querySelector("#numero_ejercicio5").value
    document.querySelector("#resultado5").innerHTML = ``
    multi.forEach(element => {
        let res = numero * element
        total_suma += res
        document.querySelector("#resultado5").innerHTML += `
            ${numero} x ${element} = ${res} <br>
        `
    });
    document.querySelector("#resultado5").innerHTML += `
            total es ${total_suma} 
        `
    total_suma = 0
}






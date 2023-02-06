const carrito = []
let servicios = []
let dias = []
let horarios = []
// elementos del dom

const selectServicio = document.getElementById('servicio')
const selectDia = document.getElementById('dia')
const selectHora = document.getElementById('hora')
const nombreCliente = document.getElementById('nombre-cliente')
const numeroCelular = document.getElementById('numero-celular')
const btnConfirmar = document.getElementById('confirmar')

servicios.push(new Servicio('Esculpidas', 3000))
servicios.push(new Servicio('Service de esculpidas', 2500))
servicios.push(new Servicio('Kapping', 2500))
servicios.push(new Servicio('Semipermanente', 2000))
servicios.push(new Servicio('Belleza de pies', 2000))
servicios.push(new Servicio('Pedicuria profunda', 2600))

dias.push(new Dias('Martes'))
dias.push(new Dias('Miercoles'))
dias.push(new Dias('Jueves'))
dias.push(new Dias('Viernes'))
dias.push(new Dias('Sabado'))

horarios.push(new Horarios('11:00'))
horarios.push(new Horarios('12:00'))
horarios.push(new Horarios('13:00'))
horarios.push(new Horarios('14:00'))
horarios.push(new Horarios('15:00'))
horarios.push(new Horarios('16:00'))
horarios.push(new Horarios('17:00'))
horarios.push(new Horarios('18:00'))

localStorage.setItem('servicios', JSON.stringify(servicios))
localStorage.setItem('dias', JSON.stringify(dias))
localStorage.setItem('horarios', JSON.stringify(horarios))

servicios.forEach((servicio) => {
    const option = document.createElement('option')
    option.innerText = `${servicio.nombre}  $${servicio.precio}`;
    option.value = servicios.indexOf(servicio);
    selectServicio.appendChild(option);
})

dias.forEach((dia) => {
    const option = document.createElement('option')
    option.innerText = `${dia.dias}`;
    option.value = dias.indexOf(dia);
    selectDia.appendChild(option);
})

horarios.forEach((horario) => {
    const option = document.createElement('option')
    option.innerText = `${horario.horarios}`;
    option.value = horarios.indexOf(horario);
    selectHora.appendChild(option);
})





// boton

btnConfirmar.addEventListener('click', e => {
    alert()
})




















// // servicios
// class servicios {
//     constructor(servicio, duracion, precio) {
//         this.servicio = servicio
//         this.duracion = duracion
//         this.precio = precio
//         this.info = `El servicio ${servicio} tiene una duracion de ${duracion} y su precio es de ${precio}`
//     }
//     showInfo = () => {
//         alert(this.info)
//     }
// }
// let esculpidas = new servicios("Esculpidas", "1.30hs", 3500)
// let kapping = new servicios("Kapping", "1h", 2700)
// let semipermanente = new servicios("Semipermanente", "45min", 2100)
// let pedicuria = new servicios("Pedicuria", "1h", 2600)


// //funciones
// const miTurno = (servicioSeleccionado, nombreUsuario, horarioSeleccionado)=> {
//     if (servicioSeleccionado == "esculpidas") {
//         alert("Hola " + nombreUsuario + "!\n" + esculpidas.info + "\n" + "Tu turno es a las " + horarioSeleccionado + "hs")  
//     }

// }

// let nombreUsuario
// let horarioSeleccionado
// let servicioSeleccionado

// do {
//    let menu = prompt("1 - Quiero un turno \n2 - Salir")
//     menu = parseInt(menu)
//     switch (menu) {
//         case 1: nombreUsuario = prompt("Ingrese su Nombre");
//             horarioSeleccionado = prompt("Selecione un horario entre las 11hs y las 19hs");
//             servicioSeleccionado = prompt("Seleccione un servicio");
//             horarioSeleccionado = parseInt(horarioSeleccionado);
//             miTurno(servicioSeleccionado, nombreUsuario, horarioSeleccionado);
//             break;
//         case 2: alert("Nos vemos la proxima")

//         default: alert("Opcion invalida")
//     }

// } while 
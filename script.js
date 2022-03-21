

let num1 = prompt("Ingresar un numero");
alert("El usuario ingresó "+ num1);
let num2 = prompt("Ingresar otro numero");
alert("El usuario ingresó "+ num2);

const suma = (num1, num2) => num1 + num2
const resta = (num1, num2) => num1 - num2
const division = (num1, num2) => num1 / num2
const multiplicacion = (num1, num2) =>num1 * num2

console.log(suma(num1, num2))
console.log(resta(num1, num2)) 
console.log(division(num1, num2)) 
console.log(multiplicacion(num1, num2)) 

let array = []

let array2 = ["Elegir Producto", 5, true, "Comprar", "Envio"]

console.log(array2)
console.log(array2[2])

for(let i = 0; i < array2.length; i++) {
console.log(array2[i])
}
array2.push({nombre: "Asesor de compras", telefono: "47509290"})

array2.pop()
console.log(array2)

array2.splice(4)

console.log(array2)

console.log(array2.join(","))

let array3 = ["Tenazas", "Destormilladores"]
let array4 = ["Llaves Allen", "Tornillos Allen"]
let array5 = array3.concat(array4)
console.log(array5)
//let array6 = [prompt("Ingrese Producto"), 1]
//console.log(array6)

//let array7 = array5.slice(1, 3)
//console.log(array7)

//let indice = array3.indexOf("Tenazas")
//console.log(indice)

let array8 = ["Tenazas", "Destormilladores", "Llaves Allen", "Tornillos Allen"]
let productoABuscar = prompt("Ingrese nombre del Producto")
let indice = array8.indexOf(productoABuscar)

if(indice !== -1){
array8.splice(indice,1)
} else {
//alert("Usuario no encontrado")
swal({
    title: 'Usuario no encontrado',
    text: 'Usuario no encontrado' ,
    icon: 'alert',
    confirmButtonText: 'cool'
})
}
console.log(array8)

console.log(array8.includes("Termocupla"))

class Persona {
constructor(nombre, apellido, edad) { 
this.nombre = nombre;
this.apellido = apellido;
this.edad = edad;
}
}
const persona1 = new Persona("Veronica", "Apollonio", 36)
const persona2 = new Persona("Rodrigo", "deArteaga", 31)
const persona3 = new Persona("Raquel", "Lagatta", 65)

let arrayPersonas = [persona1, persona2, persona3]

for(let i= 0; i < arrayPersonas.length; i++) {
console.log(i)
}

for(let personaEnArray of arrayPersonas){
console.log(personaEnArray)
/*for(let propiedad in arrayPersonas) {
console.log(arrayPersonas[propiedad])}}*/
}
arrayPersonas.forEach(persona => console.log(persona))

console.log(arrayPersonas.find((persona) => persona.nombre === "Rodrigo" && persona.edad >=30 )) 
console.log(arrayPersonas.filter((persona) => persona.nombre === "Raquel"))
console.log(arrayPersonas.map((persona) => persona.edad))
console.log(arrayPersonas.map((persona) => persona.edad >= 65))
const arrayPersonas2 = arrayPersonas
console.log(arrayPersonas2.sort(function(persona1, persona2) {
if(persona1.nombre < persona2.nombre) {
    return -1
}

if(persona1.nombre > persona2.nombre) {
    return 1
}

return 0
}))


let [a,b] = arrayPersonas
console.log(a)
console.log(b)

console.log(...arrayPersonas)


console.log(document.getElementById("nuevosproductos"))
console.log(document.getElementsByClassName("fondonegro"))
console.log(document.getElementsByClassName("header")[0].children[0])
console.log(document.getElementsByTagName("p"))

let etiquetasP = document.getElementsByTagName("p")
for(let parrafo of etiquetasP) {
console.log(parrafo)
}

let humor = document.getElementById("humor")
humor.innerText += " MENSUAL"

let historiaId = document.getElementById("historia")
historiaId.innerHTML += `
<h3 id="1" class="epigrafe">Nuestros Equipo de Atencion al Cliente Siempre disponible las 24 hs</h3>
`
let divcontenidos = document.getElementById("divcontenidos");
divcontenidos.remove()

class personaN {
constructor(id, nombre, apellido, edad, dni) {
    this.id = id;
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
    this.dni = dni;
}
}

const persona6 = new personaN(1, "Veronica", "Apollonio", 36, 31723017)
const persona7 = new personaN(2, "Cecilia", "Exposito", 46, 22754176)
const persona8 = new personaN(3, "Tatiana", "Basaj", 31, 36456098)

const personas = [persona6, persona7, persona8]
let divPersonas = document.getElementById('divPersonas')

personas.forEach(personaEnArray => {
divPersonas.innerHTML += `
    <div id="${personaEnArray.id}" class="personas">
        <img class="imagenUbicacion" class="footerArticleUbicacion" src="https://colombia.argos.co/wp-content/uploads/2021/09/Progra%CC%81mate-con-las-pro%CC%81ximas-ferias-especializadas-para-ferreteros-.jpg" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy">
        <p> Nombre: ${personaEnArray.nombre}</p>
        <p> Apellido: ${personaEnArray.apellido}</p>
        <p> Edad: ${personaEnArray.edad}</p>
        <p> Dni: ${personaEnArray.dni}</p>
    </div>
`
})

/*let boton1 = document.getElementById("boton1")

boton1.addEventListener('click', () => {
    console.log("Respuesta evento");
})

boton1.onclick = () => console.log("Me diste click por onclick")*/

let boton1 = document.getElementById("boton1")

boton1.addEventListener('click', () => {

let Consultas = document.getElementById("Consultas")
console.log(Consultas.value)
})

Consultas.addEventListener('input', () => {
    console.log("Hola desde input!");
})

let valor
let inputColor = document.getElementById("inputColor")

inputColor.addEventListener('input', (e) => {
    console.log(e.target.value)
})

class Producto {
    constructor(nombre, marca, precio, stock) {
    this.nombre = nombre;
    this.marca = marca;
    this.precio = precio;
    this.stock = stock;
    }
}

let formProducto = document.getElementById('formProducto')
let botonProductos = document.getElementById('botonProductos')
let divProductos = document.getElementById('divProductos')

let productos = []
// Eventos

formProducto.addEventListener('submit', (e) => {
    e.preventDefault()

    let nombre = document.getElementById('nombre').value
    let marca = document.getElementById('marca').value
    let precio = document.getElementById('precio').value
    let stock = document.getElementById('stock').value

    const producto = new Producto(nombre, marca, precio, stock)
    productos.push(producto)

    console.log(productos)
    formProducto.reset()
})

botonProducto.addEventListener("click", () => {
    if(productos.length !== 0) {
        divProductos.innerHTML = ""
        productos.forEach((producto , indice) => {
            divProductos.innerHTML += 
            `
            <div class="card" id="producto${indice} style="width: 18rem;">
             <div class="card-body">
              <h5 class="card-title">${producto.nombre}</h5>
                 <p class="card-text">Marca: ${producto.marca}</p>
                 <p class="card-text">Precio: ${producto.precio}</p>
                 <p class="card-text">Stock: ${producto.stock}</p>
                 <button class="btn btn-secondary">Eliminar</button>
             </div>
            </div>
             `
     
         })  
    } else {
        divProductos.innerHTML = "No se agrego ningun producto"

    }
    
})

localStorage.setItem('Saludar', 'Hola')
localStorage.setItem('Saludar', 'Adios')

let valorLocalStorage = localStorage.getItem('Saludar')

console.log(valorLocalStorage)

for(let i = 0; i < localStorage.length; i ++) {
    let clave = localStorage.key(i)
    console.log(clave)
    console.log(localStorage.getItem(clave))
}

localStorage.removeItem('PersonasT')
//localStorage.clear()
//sessionStorage.setItem('Saludar', 'Hola')

class Personal {
    constructor(nombre, apellido, edad) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
    }
}

const personal1 = new Personal("Martin", "Figueredo", 22)
const personal2 = new Personal("Lucia", "Fortuna", 25)

let personales = [personal1,personal2]
//let personaJSON = JSON.stringify(personas)
localStorage.setItem('Personales', JSON.stringify(personales))

let personalesParseadas = JSON.parse(localStorage.getItem('Personales'))
console.log(personalesParseadas)

/*let arrayPersonas = []

localStorage.setItem('Personas', JASON.stringify(arrayPersonas))
let formPersona = document.getElementById('formPersona')

formPersona.addEventListener('submit', (e) => {
    e.preventDefault()
    let datForm = new FormData(e.target)
    //console.log(datForm.get('nombre')) //document.getElementById('idnombre').
    const persona = new Persona(datForm.get('nombre'), datForm.get('apellido'),
    arrayPersonas.push(persona)
    localStorage.setItem('Personas', JSON.stringify(arrayPersonas))
    formPersona.reset()
    //Recordar adaptar el form en html
})*/

let botonPersonal = document.getElementById('botonPersonal')
let divPersonal = document.getElementById('divPersonal')

botonPersonal.addEventListener("click", () => {
    let personalesParseadas = JSON.parse(localStorage.getItem('Personales'))
    personalesParseadas.forEach(personales => {   
     divPersonal.innerHTML += 
            `
                 <p> ${personales.nombre} </p>
                 <p> ${personales.apellido} </p>
                 <p> ${personales.edad} </p>
                 
             `
    })
})

let edad = 18
edad >= 18 ? alert("Puede Navegar en este Sitio") : alert("No puede navegar en este sitio")

const carrito = []

carrito.length === 0 && console.log("El carrito esta vacio")

const usuario1 = {
    nombre: "Jonny Cash",
    edad: 65
}


const usuario2 = null

console.log(usuario1 || "El usuario no existe")

console.log(usuario2 || "El usuario no existe")

if("null" ?? undefined) {
    console.log("V")
} else {
    console.log("F")
}

const persona22 = {nombre : "Roberto", apellido: "Apollonio"}

console.log(persona22?.name || "Propiedad no encontrada")

let {nombre, apellido} = persona22

console.log(nombre)
console.log(apellido)

class PersonaL {
    constructor(nombre, apellido, edad, licencia) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.licencia = licencia;
    }

}

const personaL1 =new PersonaL("Julio", "Perez", "80", {tipo: "B1", fechaVencimiento: "20/08/2022"}
)

let {licencia : licenciaDeConducir} = personaL1

console.log(licenciaDeConducir)

function desestructurame (objPersona) {
    let {licencia} = objPersona
    console.log(licencia)
}

desestructurame(personaL1)


const cliente1 = {
    nombre: "Osmar",
    edad: 56,
    region: "Caseros"
}

const cliente2= {
    ...cliente1
}

console.log(cliente2)

const cliente3 = {
    ...cliente1,
    sucursal: "Villa Pineral",
    contacto: "4750 9290"
}

console.log(cliente3)

function sumar(...numeros) {
    return numeros;
    //console.log(numeros.reduce((num1, num2) => num1 + num2, 0))
}
let arrayNumeros = sumar(10, 15, 30, 5)
console.log(arrayNumeros)

document.getElementById('botonAlerta').addEventListener('click', () => {
swal({
    title: 'Chiste-Chiste',
    text: 'Un atracador secuestró a toda una famila, y se quedo sin tener a quien pedir rescate!!!!',
    icon: 'chiste',
    confirmButtonText: 'cool'
    })
})

Toastify({
    text: "Bienvenidos al Mundo de Ferreteria Roberto",
    duration: 20000,
    destination: "https://github.com/apvarun/toastify-js",
    newWindow: true,
    close: true,
    gravity: "top", // `top` or `bottom`
    position: "left", // `left`, `center` or `right`
    stopOnFocus: true, // Prevents dismissing of toast on hover
    style: {
      background: "linear-gradient(to right, #00b09b, #96c93d)",
    },
    onClick: function(){} // Callback after click
  }).showToast();

  const DateTime = luxon.DateTime
  const now = DateTime.now()
  console.log(now.toString() )

console.log("Inicio")

  setTimeout(() => {
      console.log("Esperando")
}, 1000)

console.log("Fin")

/*for(let i of "Hola") {
      console.log(i)
}

for(let j of "Mundo") {
    console.log(j)
}*/

for(let i of "Hola") {
    setTimeout(() => {
        console.log(i)
    },5000)
}

for(let j of "Mundo") {
    setTimeout(() => {
        console.log(j)
    },10000)
}

const probarPromesa = (val) => {
    return new Promise ((res, rej) => {
        if(val === true) {
            res("Promesa afirmativa")
        } else (
            rej("Promesa no cumplida")
        )
    }
    )
}
console.log(probarPromesa(true))
console.log(probarPromesa(false))

const eventoFuturo = (res) => {
    return new Promise( (resolve, reject) => {
        setTimeout( () => {
            res ? resolve('Promesa resuelta') : reject('Promesa rechazada')
        }, 2000)
        })
    }
 console.log( eventoFuturo(true) )

 eventoFuturo(true)
      .then( (response) => {
          console.log(response)
      })


      .catch( (error) => {
          console.log(error)
      })

      .finally( () => {
          console.log("Fin del Proceso")
      })

      let arrayPromesa = [
          {nombre: "Fabio", apellido: "Coder"},
          {nombre: "Hector", apellido: "Gimenez"},
          {nombre: "Patricio", apellido: "Suarez"},
      ]

      const pedirInfo = () => {
          return new Promise((res,rej) => {
              setTimeout( () => {
                  res(arrayPromesa)
              }, 3000)
          })
      }

console.log(pedirInfo())

let divDolar = document.getElementById('divDolar')

fetch("https://criptoya.com/api/dolar")
.then(response => response.json())
.then(data => {
    //console.log(data)
    let{blue, oficial, ccl, mep, ccb, solidario} = data

    divDolar.innerHTML = `
         <h2> FERRETERIA ROBERTO TE BRINDA EL VALOR DOLAR EN TODO MOMENTO </h2>
         <P> Oficial: $${oficial} </p>
         <P> Solidario: $${solidario} </p>
         <P> Mep: $${mep} </p>
         <P> Ccl: $${ccl} </p>
         <P> Ccb: $${ccb} </p>
         <P> Blue: $${blue} </p>
    `
})

fetch('clientes.json')
.then(response => response.json())
.then(clientes => {
    console.log(clientes)
})

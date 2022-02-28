

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
alert("Usuario no encontrado")
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
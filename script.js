
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
    AsesordeCompras(nombre, apellido, edad) { 
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
    console.log(arrayPersonas[i])
}

for(let personaEnArray of arrayPersonas){
 console.log(personaEnArray)
}
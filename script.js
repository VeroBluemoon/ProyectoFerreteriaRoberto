var nombre="Francisco"
var edad= 40

console.log(nombre)

nombre = "pepe"

console.log(nombre)

console.log(1)
console.log(2)
console.log(3)
console.log(4)
console.log(5)
console.log(6)
console.log(7)

for (let i = 0; i <10; i++) {
    alert (i);
    console.log(i)
    if (i == 6){
        console.log("adios")
        break
    }
}


let ingresarNumero = parseInt(prompt("Ingresar Numero"));
for (let i = 1; i<=10; i++) {
    let resultado = ingresarNumero * i ;
    alert(ingresarNumero +" X "+ i +" = "+ resultado);
}

for(let i = 1; i <=3;i++) {
    let ingresarNombre = prompt ("Ingresar nombre");
    alert ("Turno Nº "+i+" Nombre: "+ingresarNombre);
}

let entrada = prompt("Ingresar un dato");
while(entrada !="ESC"){
    alert("El usuario ingresó "+ entrada);
    entrada = prompt("Ingresar otro dato");
}




const iva   = x => x * 0.21;
let precioProducto  = 500; 
let descuento = 50;  

let nuevoPrecio = resta(suma(precioProducto, iva(precioProducto)), descuento ); 
console.log(nuevoPrecio);

const suma = (num1, num2) => num1 + num2
const resta = (num1, num2) => num1 - num2
const division = (num1, num2) => num1 / num2
const multiplicacion = (num1, num2) =>num1 * num2

console.log(suma(5,10))
console.log(resta(5,10))
console.log(division(5,10))
console.log(multiplicacion(5,10))

var nombre = "Yeison";
var apellidos = "Molina Monsalve";
var edad = 31;

// almacenar datos en el localStorage

localStorage.setItem("nombre", nombre);
localStorage.setItem("apellidos", apellidos);
localStorage.setItem("edad", edad);

// Acceder a los datos

console.log(localStorage.getItem("nombre"));
console.log(localStorage.getItem("apellidos"));
console.log(localStorage.getItem("edad"));

// Eliminar datos del localStorage

localStorage.removeItem("apellidos");

// Actualizar valor 
localStorage.setItem("nombre", "Daniel");

const coche = {
    marca: "BMW",
    color: "Negro",
    precio: 17
}
// Transformar objeto en JSON 
const cocheString = JSON.stringify(coche);

localStorage.setItem("coche", cocheString);

// Convertir JSON a objeto para modificar
let cocheStorage = localStorage.getItem("coche");
cocheStorage = JSON.parse(cocheStorage);

// reemplazar un valor 
cocheStorage.color = "Blanco";

cocheStorage = JSON.stringify(cocheStorage);
localStorage.setItem("coche",cocheStorage);
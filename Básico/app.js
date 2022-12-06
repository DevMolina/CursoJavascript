
//console.log("Hola")
//alert("Me llamo Yeison")
var name = "Yeison";
var lastname = "Molina Monsalve"

// Concatenar
// console.log(name+" "+lastname);
console.log(`${name} ${lastname}`);

// Variables
// String, Number, Float, Boolean, Array, Object, Function, ...

//String
var name = "Yeison";
console.log(name)
console.log(typeof name);

//number
name= 55;
console.log(name)
console.log(typeof name);

//Float
name=109.7;
console.log(name)
console.log(typeof name);

//Object
name = {};
console.log(name)
console.log(typeof name);

//var vs let
// let es una variable local y var global.
var marcaCoche = "Renault";
let velocidadMax = 120;

console.log(marcaCoche);
console.log(velocidadMax);

//funciones 

function miFuncion(){
    var marcaCoche = "BMW";
    let size = 1000;
    if(marcaCoche = "BMW"){
        var precio = 90.0;
    }
    console.log(size);
    console.log(precio);
    console.log(marcaCoche);

}

miFuncion();

// constantes, no permite cambiar su valor en tiempo de ejecución
const urlApi = "https://google.es/api"
console.log(urlApi);

// urlApi = "https://molina.com"
// console.log(urlApi);

const VERSION_API = "v2";
const LANG = "ES";
const TOKEN = "kasdaisdhasdJsSadgnas";

// Objetos

var objeto = {
    nombre: "Yeison",
    apellidos: "Molina Monsalve",
    edad: 31,
    pais: "Colombia"
}

// var nombre = objeto.nombre;

// console.log(nombre);

const {nombre,edad,...rest} = objeto;

console.log(nombre);
console.log(edad);
console.log(rest);

let ventilador = {
    altura: "100cm",
    color: "negro",
    potencia: "100W"
};

console.log(ventilador);

// Acceder a las propiedades del objeto

console.log(ventilador.altura);
console.log(ventilador["color"]);

// Ejemplo de uso

var opcionDelUsuario = "potencia";

console.log(ventilador[opcionDelUsuario]);

// Objetos dentro de objetos

let ventilador2 = {
    altura: "100cm",
    color: "negro",
    potencia: "100W",
    helices: {
        tamano: "10cm",
        material: "Plastico",
        color: "Blanco",
        precio:{
            precio1: 20,
            precio2: 40,
            casa: "La mia",
            casa2: "La tuya"
        }
    }
};

console.log(ventilador2);
console.log(ventilador2.helices.precio.casa2);

// Modificar objetos

ventilador.color = "Blanco";
ventilador.precio = 50;
console.log(ventilador);

//Array

let numeros = [1, 8, 4, 10, 2, 5, 6, 8];

console.log(numeros);
console.log(typeof(numeros));

let arrayVariado = [99, "carro", true, 4.77];
console.log(arrayVariado);

let miArray = [];
console.log(miArray);
// .push para agregar datos al array
miArray.push("DeadPool")
console.log(miArray);

miArray.push(55);
console.log(miArray);

miArray.push("Rondador Nocturno")
console.log(miArray);

// Dos datos a la vez
miArray.push(106,true);
console.log(miArray);

// Longitud de vector
console.log("Mi array tiene un tamaño de " + miArray.length + " elementos");

// Acceder a elementos de vector
console.log("El tercer elemento es " + miArray[2]);

// Eliminar elementos de vector
// Eliminar último 
miArray.pop();
console.log(miArray);

// Eliminar primer 
miArray.shift();
console.log(miArray);

// Encontrar elemento
let indexArray = miArray.indexOf("Rondador Nocturno");
console.log(miArray[indexArray]);

// Clones de array
//No sirve, reemplaza los 2
let pepe = miArray; 
pepe.push("Modifica los 2")
console.log(pepe);
console.log(miArray);
//Forma correcta
let copiaArray = miArray.slice();
copiaArray.push("Solo modifica clon")
console.log(miArray);
console.log(copiaArray);

// Array de objetos
let arrayObjetos = [
    {
        nombre:"SpiderMan",
        edad: 17,
        superPoderes: ["Escalar", "Tela araña", "Super Agilidad"],
        armas: false,
        armasLista: []
    },
    {
        nombre: "Hulk",
        edad: 32,
        superPoderes: ["Super Fuerza", "Furia", "Color Verde"],
        armas: false,
        armasLista: []
    },
    {
        nombre: "Iron Man",
        edad:41,
        superPoderes: ["Tecnología", "Inteligencia", "Dinero"],
        armas: true,
        armasLista: ["Robots", "Laser", "Misiles"]
    }
];

console.log(arrayObjetos);
// acceder objeto
console.log(arrayObjetos[1]);
// acceder propiedad objeto
console.log(arrayObjetos[1].nombre);

// Comparar valores de propiedades
if(arrayObjetos[1].armas === true){
    console.log(arrayObjetos[1].nombre);
    console.log(arrayObjetos[1].armasLista);
}else{
    console.log("No tiene armas");
}

arrayObjetos.push(
    {
        nombre: "Ciclope",
        edad: 29,
        armas: true,
        armasLista: ["Rayos laser", "Fuerza"]
    }
);

console.log(arrayObjetos);

// Condicionales
let id = 3;
let nombreHeroe = arrayObjetos[id].nombre;
let armas = arrayObjetos[id].armas;
let anos = arrayObjetos[id].armas;

// Normal
if(armas === true){
    console.log(nombreHeroe + " si tiene armas");
}else if(armas === false){
    console.log(nombreHeroe + " no tiene armas");    
}else{
    console.log("Heroe desconocido ...");
}

// Ternario
console.log(arrayObjetos[2].armas ? "Si tiene armas" : "No tiene armas");

// switch

let nom = "Hulk";

switch(nom){
    case "Hulk":
        console.log("hola " + nom);
        break;
    case "Iron Man":
        console.log("hola " + nom);   
        break;
    case "Capitan America":
        console.log("hola " + nom);
        break;      
    default:
        console.log("Caso en el que no encuentra nada");

}

// Bucles
// for

for(let x = 0; x < arrayObjetos.length; x++){
    console.log(arrayObjetos[x].nombre);
    console.log(arrayObjetos[x].armas ? recorrerArmas(x) : "No tiene armas");
}

function recorrerArmas(x){
    for(let y = 0; y < arrayObjetos[x].armasLista.length; y++){
        console.log(arrayObjetos[x].armasLista[y]); 
    }
    console.log("-------------");
}

console.log(arrayObjetos[2].armasLista.length);

// foreach

arrayObjetos.forEach(heroe =>{
    console.log(heroe.nombre);
    if(heroe.armas === true){
        console.log("Tiene armas");
    }else{
        console.log("No tiene armas");
    }
    console.log("-------------");
    heroe.armasLista.forEach(arma =>{
        console.log(arma);
    });
});


// while

var i = 0;

while(i < 10){
    // if(i === 2){
    //     break;
    // }
    i++;
    if(i === 5){
        continue;
    }
    console.log("Estamos en el indice " + i);
}
console.log("------------------");
// do while
i=0
do{
    i++;
    if(i === 4){
        continue;
    }
    console.log("Estamos en el indice " + i);
}while(i<10)

// Funciones básicas

// funcion simple
function holaMundo(){
    console.log("Hola Mundo");
}

holaMundo();

// Función con parámetros
function holaPersona(nombre, apellidos){
    console.log(`Hola ${nombre} ${apellidos}`);    
}

holaPersona("Yeison","Molina Monsalve");

// Función de calculo
function sumaDosNumeros(numUno,numDos){
    let total = numUno+numDos;
    console.log(`La suma de ${numUno} y ${numDos} es ${total}`);
}

sumaDosNumeros(15,7);

// Tabla de multiplicar
function tablaMultiplicar(numero){
    console.log("----------------------");
    console.log("Tabla del número " + numero);    
    let maxNum = 11;
    for(let x = 0; x < maxNum; x++){
        resultado = x*numero;
        console.log(`${numero} x ${x} = ${resultado}`);    
    }
    console.log("----------------------");
}

tablaMultiplicar(2);
tablaMultiplicar(10);
tablaMultiplicar(15);

// Funcion para calcular la edad de una persona pasando el año de nacimiento
function cualEsMiEdad(anioNacimiento){
    let date = new Date();
    let anioActual = date.getFullYear();
    let anios = anioActual-anioNacimiento;
    console.log(`Usted tiene ${anios} años`);
}
cualEsMiEdad(1991)

// Función con retorno
function menosUno(numero){
    return numero-1;
}
let result = menosUno(10);
console.log(result);

// Funcion objeto de entrada 
function miFuncionObjeto(obj){
    let date = new Date();
    let anioActual = date.getFullYear();
    obj.anioActual = anioActual;
    return obj;
}

objeto = miFuncionObjeto(objeto);
console.log(objeto);

// Funciones de tipo flecha 
// Son de tipo anónima
const miNombre = (nombre, apellido) => {
    return `Me llamo ${nombre} ${apellido}`;
};

console.log(miNombre("Yeison", "Molina Monsalve"));

const sumFn = (numeroUno, numeroDos) =>{
    let result = numeroDos + numeroUno;
    return result;
}

let resultSuma = sumFn(2,9);
console.log(resultSuma);

// Funciones de espera de tiempo
console.log("Carga Completa");
setTimeout(() => {
    console.log("Hola");
}, 2000);


const miFun = (edad) => {
    console.log("Estamos calculando tu edad");
    setTimeout(() => {
        cualEsMiEdad(edad);
    }, 5000);
}

miFun(1991);

// Funcion Map
// devuelve un array
const numros = [1, 5, 9, 10, 55, 80, 105, 30];
const dobles = numros.map((num) => {
    console.log(num);
    return num*2;
});

console.log(dobles);

// Otro ejemplo

const arrayClaveValor = [
    {clave: "nombre", valor: "Yeison"},
    {clave: "apellidoUno", valor: "Molina"},
    {clave: "apellidoDos", valor: "Monsalve"}
];

// {nombre: "Yeison"},
// {apellidoUno: "Molina"},
// {apellidoDos: "Monsalve"}

const reformatearArray = arrayClaveValor.map((objeto) => {
    let obj = {};
    obj[objeto.clave] = objeto.valor;
    return obj;
});

console.log(reformatearArray);

// función .filter()
const arrayHeroes = [
    "IronMan",
    "Thor",
    "Capitan America",
    "SpiderMan",
    "DeadPool"
];

const resultHeroesFilter = arrayHeroes.filter((heroe) =>{
    return heroe.length == 8;
});

console.log(resultHeroesFilter);

// Otro ejemplo
const arrayList = ["Thor", 77, 54, 12.0, true, false, 0x16];

const resultArrayList = arrayList.filter((element) =>{
    return typeof element === "boolean"; //debe tener condición de retorno (condicional)
});

console.log(resultArrayList);

// Casting
var numero = 15;
console.log(numero);
console.log(typeof numero);

var numeroString = numero.toString();
console.log(numeroString);
console.log(typeof numeroString);

if(typeof numero === "number"){
    let numeroString = numero.toString();
    console.log("La variable es de tipo String");
    console.log(typeof numeroString);
}else{
    console.log("La variable es de tipo String");
    console.log(typeof numero);
}

var numUno = "20";
var numDos = 10;

numUno = parseInt(numUno);
var total = numUno + numDos;

console.log(total);

// Función replace()

var texto = "Mi coche es rojo";
console.log(texto);

var textoCorregido = texto.replace("rojo", "azul");
console.log(textoCorregido);

// Otro ejemplo. Solamente funciona con String
var numer = 600.700;
console.log("$"+numer);
var numeroComa = numer.toString();
numeroComa = numeroComa.replace(".",",");
console.log("$"+numeroComa);

// JSON

const coche = {
    marca: "Ferrari",
    color: "Rojo",
    precio: 600000000
}

console.log(coche);
// transformar objeto en JSON 
const cocheJson = JSON.stringify(coche);

console.log(cocheJson);

// Recibir JSON 
const jsonRecibido = '{"marca":"Ferrari","color":"Rojo","precio":600000000}';
console.log(jsonRecibido);

const jsonRecibidoObjeto = JSON.parse(jsonRecibido);
console.log(jsonRecibidoObjeto);

// Objetos con NEW. Creación de objetos. 

function Animal(tipo, nombre, edad){
    this.tipo = tipo;
    this.nombre = nombre;
    this.edad = edad;    
}

var apachai = new Animal("Perro", "Apachai",3);
var rocky = new Animal("Perro","Rocky",6);
var anubis = new Animal("Gato","Anubis",2);

apachai.velociad = "30 km/h";

console.log(apachai);
console.log(rocky);
console.log(anubis);

// async y await
// Ejecución lleva un orden 
var name = null;


function actualizarNombre(){
    console.log("Iniciando actualización");
    return new Promise((resolve,reject) => {
        setTimeout(() => {
        console.log("Actualización completada");
        resolve("Yeison");//resuelta
        reject("Error");//error
        }, 1000);
    })
}

async function saludar(){
    name = await actualizarNombre(); // debe devolver promesa
    console.log("Actualización Finalizada");
    console.log("Hola me llamo " + name);
}

saludar();
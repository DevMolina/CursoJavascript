//Se puede crear servidor con XAMP, WAMP, MAMP, NODE ...
//Ejemplo con NODE.js  https://nodejs.org/en/
// npm para servidor local https://www.npmjs.com/ buscar http-server

// cookies son registros que se guardan en el navegador del cliente. 
// Ejemplo. Carro de compra

// cookie de nombre
// Escapar caracteres especiales 

// var nombre = escape("Yei;son");
// console.log(nombre);
// document.cookie = "nombre=Yei;son";
// document.cookie = "apellidos=Molina Monsalve";

// let cookies = document.cookie;
// console.log(cookies);

const crearCookie = (clave, valor) => {
    const valorEscape = escape(valor);
    let mesSiguiente = new Date();
    mesSiguiente.setMonth(mesSiguiente.getMonth()+1);
    // console.log(mesSiguiente);
    document.cookie = `${clave}=${valorEscape};expires=${mesSiguiente};`
}

const borrarCookie = clave => {
    let mesAnterior = new Date();
    mesAnterior.setMonth(mesAnterior.getMonth()-1);
    document.cookie = `${clave}=A;expires=${mesAnterior};`
}

const obtenerCookies = () => {
    const cookies = document.cookie;
    // crear array de cookies para separar 
    const arrayCookies = cookies.split("; ")
    //recorrer arrayCookies para separar clave y valor
    let objetoCookie = {};

    arrayCookies.forEach(cookie => {
        const cookieArray = cookie.split("=");
        const keyItem = cookieArray[0];
        const valueItem = cookieArray[1];
        objetoCookie[keyItem]=unescape(valueItem);
    });
    return objetoCookie;
}

crearCookie("marcaCoche", "Audi");
crearCookie("potenciaCoche", "175HP");

// borrarCookie("potenciaCoche");
const cookies = obtenerCookies();

console.log(`Mi coche de la marca ${cookies.marcaCoche} tiene ${cookies.potenciaCoche} de potencia`);

// const cookies = {
//     marcaCoche: "Renault",
//     potenciaCoche: "175HP",
// }

// console.log(cookies.marcaCoche);
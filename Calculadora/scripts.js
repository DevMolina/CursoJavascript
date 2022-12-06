var operator = null;
var inputValueMemo = 0;

// Función que obtiene el evento del botón y envía el dato a otra de tipo flecha
function getContentClick(event){
    const value = event.target.innerText;
    filterAction(value);
}

// Función que filtra el valor para decidir operación a realizar
const filterAction = (value) => {
    // Numeros
    value === "0" ? addNumberInput(0) : null; 
    value === "1" ? addNumberInput(1) : null;
    value === "2" ? addNumberInput(2) : null;
    value === "3" ? addNumberInput(3) : null;
    value === "4" ? addNumberInput(4) : null;
    value === "5" ? addNumberInput(5) : null;
    value === "6" ? addNumberInput(6) : null;
    value === "7" ? addNumberInput(7) : null;
    value === "8" ? addNumberInput(8) : null;
    value === "9" ? addNumberInput(9) : null;
    value === "," ? addNumberInput(',') : null;
    // Operaciones 
    value === "+" ? setOperation('+') : null;
    value === "-" ? setOperation('-') : null;
    value === "x" ? setOperation('x') : null;
    value === "/" ? setOperation('/') : null;
    value === "%" ? setOperation('%') : null;
    value === "+/-" ? setOperation('+/-') : null;

    // Total 
    value === "=" ? calculation() : null;

    // Borrar AC
    value === "AC" ? resetCalculator() : null;
}

// Función para pasar datos a la pantalla de calculadora
function addNumberInput(value){
    const inputScreen = document.getElementsByClassName("calculator__screen")[0];
    const inputValue = inputScreen.value;
    
    if(inputValue === "0" && inputValue.length === 1 && value !== ",") {
        inputScreen.value = value;
        return;
    }
    if(inputValue === "" && value === ",") {
        inputScreen.value = 0 + value;
        return;
    }
    inputScreen.value = inputValue + value;
}

// Función para seleccionar operaciones

function setOperation(operator){
    const inputScreenValue = document.getElementsByClassName("calculator__screen")[0].value;
    this.operator = operator;
    if(inputScreenValue != 0){
        calculation();
    }
}

// Funcion de calculo
function calculation(){
    const inputScreen = document.getElementsByClassName("calculator__screen")[0];
    let valueOne = transformCommaToPoint(this.inputValueMemo);
    let valueTwo = transformCommaToPoint(inputScreen.value);
    let total = 0;
    if(this.operator === "+" && inputScreen.value !== ""){
        total = valueOne + valueTwo;
    }
    if(this.operator === "-" && inputScreen.value !== ""){
        if(valueOne !== 0){
            total = valueOne - valueTwo;
        }else{
            total = valueTwo;
        }
    }

    if(this.operator === "x" && inputScreen.value !== ""){
        if(valueOne !== 0){
            total = valueOne * valueTwo;
        }else{
            total = valueTwo;
        }
    }

    if(this.operator === "/" && inputScreen.value !== ""){
        if(valueOne !== 0){
            total = valueOne / valueTwo;
        }else{
            total = valueTwo;
        }
    }

    if(this.operator === "%" && inputScreen.value !== ""){
        total = valueTwo/100;
    }

    if(this.operator === "+/-" && inputScreen.value !== ""){
        if(valueTwo > 0){
            total = -valueTwo;
        }
    }



    total = transformCommaToPoint(total);
    this.inputValueMemo = total;
    inputScreen.value = "";
    inputScreen.placeholder = total;
}

// Función resetear pantalla
const resetCalculator = () =>{
    const inputScreen = document.getElementsByClassName("calculator__screen")[0];
    inputScreen.value = 0;
    this.inputValueMemo = 0;
    this.operator = null;
}

// Función de transformar , a . y convertir en numero
function transformCommaToPoint(value){
    if(typeof value !== "number"){
        let resultTransform = value.replace(',','.');
        return parseFloat(resultTransform);
    }
    return value;
}

// Función de transformar . a ,
function transformPointToComma(value){
    let resultTransform = value.toString();
    resultTransform = resultTransform.replace('.',',');
    return resultTransform;
}


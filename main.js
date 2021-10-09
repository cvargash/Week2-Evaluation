//1. Escribe una función que reciba un parámetro y lo imprima en consola//
function hello(name){
    name = "Punto 1"
    console.log("Hola " + name);
}

//hello()


/* 2. Escribe una función que reciba dos parámetros, los sume e imprima en consola 
el resultado de la operación */

/* var num1 = 0;
var num2 = 0;
var result; */

function add(){
    var num1 = Number(prompt("Primer numero"))
    var num2 = Number(prompt("Segundo numero"))
    if(num1 == null || num1 == "" || typeof(num1) !== "number" || num2 == null || num2 == "" || typeof(num2) !== "number"){
        console.log("Ingrese un valor numérico")
    }else{
       result = Number(num1) + Number(num2);
       console.log(result);
    }
    
}

//add();

/* 3. Escribe una función que reciba dos parámetros, los reste e imprima en consola 
el resultado de la operación..*/

function subtrac(){
    var num1 = Number(prompt("Primer numero"))
    var num2 = Number(prompt("Segundo numero"))
    if(num1 == null || num1 == "" || typeof(num1) == "number" || num2 == null || num2 == "" || typeof(num2) == "number"){
        console.log("Ingrese un valor numérico")
    }else{
       result = Number(num1) - Number(num2);
       console.log(result);
    }
    
}

//subtrac();

/* 4. Escribe una función que reciba dos parámetros, los multiplique e imprima en consola 
el resultado de la operación.*/

function multiply(){
    var num1 = Number(prompt("Primer numero"))
    var num2 = Number(prompt("Segundo numero"))
    if(num1 == null || num1 == "" || typeof(num1) != "number" || num2 == null || num2 == "" || typeof(num2) != "number"){
        console.log("Ingrese un valor numérico")
    }else{
       result = Number(num1) * Number(num2);
       console.log(result);
    }
    
}

//multiply()

/* 5. Escribe una función que reciba dos parámetros, los divida e imprima en consola 
el resultado de la operación.*/

function divide(){
    var num1 = Number(prompt("Primer numero"))
    var num2 = Number(prompt("Segundo numero"))
    if(num1 == null || num1 == "" || typeof(num1) != "number" || num2 == null || num2 == "" || typeof(num2) != "number"){
        console.log("Ingrese un valor numérico")
    }else{
       result = Number(num1) / Number(num2);
       console.log(result);
    }
    
}

//divide()

/* 6. Escribe una función que reciba el radio de un círculo como parámetro, calcule 
el área del círculo e imprima en consola.
Formula utilizada para averiguar el Area  A = PI + r^2
*/

function radius(){
    var pi = Math.PI;
    var radio = parseFloat(prompt("ingrese el radio"))
    var area = pi * Math.pow(radio,2);
    console.log(area);
}

//radius()

/* 7. Escribe una función que reciba como parámetro un valor en metros e imprima en consola 
su equivalente en kilómetros, con máximo dos decimales.*/

function metter(){
    const num1 = 1000
    var num2 = Number(prompt("cuantos metros"))
    if(num2 == null || num2 == "" || typeof(num2) != "number"){
        console.log("Ingrese un valor numérico")
    }else{
       result = Number(num2) / num1.toFixed(2);
       console.log(result);
    } 
}

//metter()

/* 8. Escribe una función que reciba como parámetro un valor en grados Celsius e imprima en consola 
su equivalente en grados Farenheit, con máximo dos decimales.*/

function grade(){
    var num1 = 32
    var num2 = Number(prompt("cuantos grados"))
    if(num2 == null || num2 == "" || typeof(num2) != "number"){
        console.log("Ingrese un valor numérico")
    }else{
       celsius = Number(num2 * 9) / 5.0;
       result = celsius + num1;
       console.log(result);
    } 
}

//grade()

/*Escribe una función que reciba las siguientes listas de números como parámetro y encuentre el valor más 
alto y más bajo en la lista. Lista1 = [10,4,2,20,5] Lista2=[0,0,0,1,0] Lista3=[-13,10,9,8,0,2000,-1]*/

/* function listItems(numbers){
    if (toString.call(numbers) !== '[object Array]'){
        return null;
    }
    if (!numbers.every(e => typeof e =='number')){
        return null;
    }

    return Math.max.apply(null, numbers);
}

console.log(listItems([10,4,2,20,5]));
console.log(listItems([0,0,0,1,0]));
console.log(listItems([-13,10,9,8,0,2000,-1])) */

/* function listItems(numbers){
    if (toString.call(numbers) !== '[object Array]'){
        return null;
    }
    if (!numbers.every(e => typeof e =='number')){
        return null;
    }

    return Math.min.apply(null, numbers);
}

console.log(listItems([10,4,2,20,5]));
console.log(listItems([0,0,0,1,0]));
console.log(listItems([-13,10,9,8,0,2000,-1])) */

/*Escribe una función que reciba dos parámetros con los que se calculará el valor exponencial de una base.
El primer parámetro será la base y el segundo será el exponente. 
Imprimir el resultado del valor exponencial de la base en consola.*/

function exponent(){
    var num1 = Number(prompt("Ingrese la base"))
    var num2 = Number(prompt("Ingrese el exponente"))
    if(num1 == null || num1 == "" || typeof(num1) !== "number" || num2 == null || num2 == "" || typeof(num2) !== "number"){
        console.log("Ingrese un valor numérico")
    }else{
       result = Math.pow(Number(num1),num2);
       console.log(result);
    }
}

//exponent()


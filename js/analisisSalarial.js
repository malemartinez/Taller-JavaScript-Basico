//vamos a calcular la mediana de los sueldos de un array de objetos con datos basicos de un grupo de personas de un pais.
/* en el array vamos a ingresar el nombre y el salario con .push()  */
/* despues vamos a sacar unicamente (en un array) los datos de los sueldos por medio de .map() */
// con los datos en un nuevo array vamos a calcular la mediana con los pasos establecidos anteriormente en el archivo promedioYmediana.js
// despues vamos a separar del array ORDENADO el 10% de los salarios mas altos (por eso necesitan estar ordenados)se hace con el metodo .slice().
// finalmenete calculamos de nuevo la mediana de este nuevo array de datos

//vamos a recorrer el array de objetos para sacar los salarios en una nueva variable
//vamos a ordenar los salarios

function MedianaSalarios (arr){

    const salarioOrder = arr.sort ((a,b) => a - b )
    const cantidadDatos = salarioOrder.length
    const mitadDatoArray = parseInt ( salarioOrder.length / 2 );

    const esPar = (numero) => (numero % 2 === 0);
    const par = esPar(cantidadDatos)
    if (par == true){
        const num1= salarioOrder [ mitadDatoArray ];
        const num2= salarioOrder [ mitadDatoArray - 1 ];
        const resultado = (num1 + num2) / 2;
        return `$${resultado}`
    }else{
        const resultado = salarioOrder[mitadDatoArray];
        return `$${resultado}`
    }

}

//mediana del top 10 de salarios en colombia

function TOP10 (arr, percentage){
    const salarioOrder = arr.sort ((a,b) => a - b )
    console.log (salarioOrder)
    const space = (percentage/100) * salarioOrder.length;
    const top10Salary = salarioOrder.slice ( -space );
    const MedianaTOP10 = MedianaSalarios (top10Salary)
    return  MedianaTOP10
}

// DOM selector

let e = false;
function err(){
    if (e == false){
        const error = document.querySelector (".error");
        error.innerHTML = "Seleccione una opción válida"
        e = true
    } 
}

function CleanErr (){
    const textError = document.querySelectorAll (".error")
    for (text of textError){
        text.innerHTML = " "
    }
    e = false
}

const Evento = (event) => {
    const CalculateButton = document.querySelector(".button")
    const percentageContainer = document.querySelector (".addPorcentage")
    if (event.target.value == 1){
        CalculateButton.textContent = "Calcular la mediana"
        CalculateButton.setAttribute("onclick", "CalcularMediana()") // modificar la funcion de onclick
        percentageContainer.style.display = "none"
        if (e == true){
            CleanErr()
        }
        
    }else if(event.target.value == 2) {
        percentageContainer.style.display = "block"
        CalculateButton.textContent = `Calcular la mediana del TOP`
        CalculateButton.setAttribute("onclick", "CalcularTOP()")
        if (e == true){
            CleanErr()
        }
    }else{
        CalculateButton.setAttribute("onclick", "err()")
        CalculateButton.textContent = `Calcular`
        percentageContainer.style.display = "none"
    }
}
let selecty = document.querySelector("#select")

selecty.addEventListener('change', Evento);

//   agregador de sueldos a la lista

let salarios =[];

function ListContainer (add){
    const ulContainer = document.querySelector (".List-items")
    const itemList = document.createElement ("li")
    itemList.textContent = `$${add}`
    ulContainer.appendChild(itemList)
}

const AddButton = document.querySelector(".add-button") 
AddButton.addEventListener ("click" , () =>{

    CleanErr()
    const AddInput = document.querySelector(".addList")
    const AddInputValue = parseInt(AddInput.value)

    if (Number.isNaN (AddInputValue) ){
        const ErrorValue = document.querySelector(".Error")
        ErrorValue.innerHTML = "Ingrese un valor válido"
    } else{
        salarios.push(AddInputValue)
        AddInput.value = null;
        // agregarlos a un contenedor que se vaya mostarndo cad vez que se le da click
       ListContainer(AddInputValue)
    }
})


// funcion que me escribe el resultado en DOM
function TextResult(string1, string2, result){
    const resultContainer = document.querySelector('.result-container')
    resultContainer.style.display = 'flex'
    const titleH2 = document.querySelector('#resultH2')
    titleH2.innerText = string1
    const titleH4 = document.getElementById('resultH4')
    titleH4.innerText = string2 + result
    const titleh5 = document.querySelector('.resultH5')
    titleh5.innerText = " "
}

const isArrFull = (arr) => (arr.length > 0)  

// calcular la mediana del nuevo array de datos

function CalcularMediana(){
    const v = isArrFull(salarios)
    console.log(v)
    console.log(salarios)
    if (v == true){
        const result = MedianaSalarios(salarios)
        const title1 = "Mediana"
        const title2 = "La mediana de los salarios es: "
        TextResult(title1 , title2 ,result)
    }else{
        const ErrorValue = document.querySelector(".ErrorList")
        ErrorValue.innerHTML = "Ingrese valores a la lista"
    }
    
}

function CalcularTOP (){
    CleanErr()
    const percentage = document.querySelector(".percentage")
    const percentageValue = parseInt(percentage.value)
    const v = isArrFull(salarios)
    
    if (v == true ){
        if (Number.isNaN(percentageValue) === false){
            console.log("se esta ejecutando")
            const result = TOP10(salarios,percentageValue)
            const title1 = `Mediana del TOP ${percentageValue}`
            const title2 = `La mediana del top ${percentageValue} es: `
            TextResult(title1 , title2 ,result)
        } else {
            const ErrorValue = document.querySelector(".ErrorPercentage")
            ErrorValue.textContent = "Ingrese un porcentaje"
        }
    }else{
        const ErrorValue = document.querySelector(".ErrorList")
        ErrorValue.innerHTML = "Ingrese valores a la lista"
    }
}

function closeResultBox(){
    const resultContainer = document.querySelector('.result-container')
    resultContainer.style.display = 'none'
}
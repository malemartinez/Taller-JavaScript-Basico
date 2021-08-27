function calcularMediaAritmetica(lista) {
    
    const sumaLista = lista.reduce(
        function(valorAcumulado = 0, nuevoElemento){
            return valorAcumulado + nuevoElemento;
        }
    )
    let promedio = (sumaLista / lista.length).toFixed(2);
    return promedio
}

function mediana(lista){
    let listaOrdenada = lista.sort((a,b)=> a - b )
    console.log(listaOrdenada)
    const cantidadDatos = listaOrdenada.length;
    const esPar = (numero) => numero % 2 === 0
        
    const par = esPar(cantidadDatos);
    const mitadDatoArray = parseInt(cantidadDatos / 2 );

    if (par == true){
        const num1= listaOrdenada[mitadDatoArray];
        const num2= listaOrdenada[mitadDatoArray - 1];
        const resultado = (num1 + num2) / 2;
        return `${resultado}`
    }else{
        const resultado = listaOrdenada[mitadDatoArray];
        return `${resultado}`
    }
}

function MODA (valores){
    arrDatos =[]

    for (v of valores){
        const arrFiltro = valores.filter((e => e === v))
        let objeto = { valor: null , rep: null }
        objeto.valor = arrFiltro[0]
        objeto.rep = arrFiltro.length
        if (arrDatos.every(item => item.valor !== objeto.valor ) ){
            arrDatos.push(objeto)
        }
    }
    const maxFilter = arrDatos.map( obj => obj.rep)
    const max = Math.max(...maxFilter)
    const Modas = arrDatos.filter( obj => obj.rep == max )
    const ModasValue = Modas.map( item => item.valor)
    return { ModasValue , max}
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
    if (event.target.value == 1){
        CalculateButton.textContent = "Calcular promedio"
        CalculateButton.setAttribute("onclick", "CalcularPromedio()") // modificar la funcion de onclick
        if (e == true){
            CleanErr()
        }
    } else if (event.target.value == 2){
        CalculateButton.textContent = `Calcular mediana`
        CalculateButton.setAttribute("onclick", "CalcularMediana()")
        if (e == true){
            CleanErr()
        }
    }else if (event.target.value == 3){
        CalculateButton.textContent = `Calcular moda`
        CalculateButton.setAttribute("onclick", "CalcularModa()")
        if (e == true){
            CleanErr()
        }
    }else {
        CalculateButton.setAttribute("onclick", "err()")
        CalculateButton.textContent = `Calcular`
    }
        

}
let selecty = document.querySelector("#select")

selecty.addEventListener('change', Evento);

//   agregador de datos a la lista

let Datos =[];

function ListContainer (add){
    const ulContainer = document.querySelector (".List-items")
    const itemList = document.createElement ("li")
    itemList.textContent = ` ${add}`
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
        Datos.push(AddInputValue)
        AddInput.value = null;
        // agregarlos a un contenedor que se vaya mostarndo cad vez que se le da click
       ListContainer(AddInputValue)
    }
})

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
function CalcularPromedio(){
    const v = isArrFull(Datos)
    if (v == true){
        const result = calcularMediaAritmetica(Datos)
        const title1 = "Media Aritmética"
        const title2 = "La media Aritmética es: "
        TextResult(title1 , title2 ,result)
        
    }else{
        const ErrorValue = document.querySelector(".ErrorList")
        ErrorValue.innerHTML = "Ingrese valores a la lista"
    }
    
}
function CalcularMediana(){
    const v = isArrFull(Datos)
    
    if (v == true){
        const result = mediana(Datos)
        const title1 = "Mediana"
        const title2 = "La mediana es: " 
        TextResult(title1, title2, result)
    }else{
        const ErrorValue = document.querySelector(".ErrorList")
        ErrorValue.innerHTML = "Ingrese valores a la lista"
    }
    
}

function CalcularModa (){
    CleanErr()
    const v = isArrFull(Datos)
    if (v == true ){
        const result = MODA(Datos)
        const valor = result.ModasValue
        const rep = result.max
        
        const title1 = "Moda"
        const title2 = "La moda es: " 
        TextResult(title1, title2, valor)
        const titleh5 = document.querySelector('.resultH5')
        if (rep === 1){
            titleh5.innerText = `y se repite: ${rep} vez `
        }else{
            titleh5.innerText = `y se repite: ${rep} veces `
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
function calcularMediaAritmetica(lista) {
    /* let sumaElementos = 0;

    for (let i = 0; i < lista.length; i++) {
        sumaElementos =+ lista[i];
    } */

    const sumaLista = lista.reduce(
        function(valorAcumulado = 0, nuevoElemento){
            return valorAcumulado + nuevoElemento;
        }
    )
    // la funcion .reduce() recibe de parametro una funcion reductora que lo que hace es devolver un valor total de todos los elemneto del array. recorre cada elemento y realiza la operacion dada y se acumula.

    let promedio = sumaLista / lista.length;
    return promedio
}

/* vamos a calcular la mediana

--para hallarla primero debemos ordenar los elementos de la lista de datos de menor a mayor
--despues verificar si la cantidad de datos es par o impar 
--si es impar, hallar el valor de la mitad de la lista y esa es mi mediana
--si es par, buscar los 2 valores del medio, y sacarles el promedio*/

// lista de datos 
/* let arrayDatos = [
    220, 25, 285, 100 , 150
];

// ordenar los datos de menor a mayor

// el sort funciona validando qué elemento es mas grande que otro al restarse y asi mismo los ordena
let listaOrdenada = arrayDatos.sort(
    (a,b)=> a - b
)

const cantidadDatos = listaOrdenada.length;
// verificar si es par o es impar
function esPar(numero){
    const Residuo = numero % 2;
    if (Residuo === 0){
        return true
    } else{
        return false
    }
}

// verificando con la funcion esPar
const par = esPar(cantidadDatos);
const mitadDatoArray = parseInt(cantidadDatos / 2 );

// sacamos la mediana deacuerdo al caso
if (par == true){
    const num1= listaOrdenada[mitadDatoArray];
    const num2= listaOrdenada[mitadDatoArray - 1];
    const resultado = (num1 + num2) / 2;
    console.log (resultado)
}else{
    const resultado = listaOrdenada[mitadDatoArray];
    console.log (resultado)
}
 */



function mediana(listadeDatos){
    let listaOrdenada = listadeDatos.sort(
        (a,b)=> a - b
    )
    const cantidadDatos = listaOrdenada.length;

    function esPar(numero){
    const Residuo = numero % 2;
    if (Residuo === 0){
        return true
    } else{
        return false
    }
}
    const par = esPar(cantidadDatos);
    const mitadDatoArray = parseInt(cantidadDatos / 2 );

    // sacamos la mediana deacuerdo al caso
    if (par == true){
        const num1= listaOrdenada[mitadDatoArray];
        const num2= listaOrdenada[mitadDatoArray - 1];
        const resultado = (num1 + num2) / 2;
        console.log (resultado)
    }else{
        const resultado = listaOrdenada[mitadDatoArray];
        console.log (resultado)
    }
}


// VAMOS A HALLAR LA MODA DE UN GRUPO DE DATOS  

function MODA (arr){
    const arrFiltrado = {};

    arr.map(  //recorremos el array con el metodo .map()
        function(element){
            if (arrFiltrado[element]){ //preguntamos si la propiedad del objeto existe. 
            //Recordar que en un objeto, propiedad : valor y se puede definir como array[propiedad] = valor
            arrFiltrado[element] += 1; // aqui le decimos que aumente su valor en 1 si se lo vuelve a encontrar
            }   else {
            arrFiltrado[element] = 1; // aqui le dice que si no esta creada la propiedad, creela con valor 1
        }
    })
    // convertirmos el objeto arrFiltrado en un array con object.entries()
    const listArray = Object.entries(arrFiltrado);
    const arrOrdenado = listArray.sort( // aqui ordenamos el array de acuerdo al valor en la posicion 1 de los arrays que hay dentro. Cuando pasamos el objeto a array, éste se convirtio en un array con arrays dentro, que tienen el valor del numero y las veces que se repite. [ ["1", 5], ["2", 3]]
        function(Arra1, Arra2){
            return Arra1[1] - Arra2[1] // aqui ordenamos de acuerdo a la posicion 1 de cada array
        }
    )
    // la moda se encuentra en la ultima posicion del array
    const moda = arrOrdenado[arrOrdenado.length - 1];
    return moda
}





// otra forma de hallar la moda 
// con nuestro objeto creado, sacamos los valores que tiene en un array nuevo

function MODA (arr){
    const arrFiltrado = {};

    arr.map(  //recorremos el array con el metodo .map()
        function(element){
            if (arrFiltrado[element]){ //preguntamos si la propiedad del objeto existe. 
            //Recordar que en un objeto, propiedad : valor y se puede definir como array[propiedad] = valor
            arrFiltrado[element] += 1; // aqui le decimos que aumente su valor en 1 si se lo vuelve a encontrar
            }   else {
            arrFiltrado[element] = 1; // aqui le dice que si no esta creada la propiedad, creela con valor 1
        }
    })
    const listArray = Object.entries(arrFiltrado);
    const  arrValues = Object.values(arrFiltrado);
    const max = Math.max.apply(null, arrValues) //forma de sacar el valor maximo de un array
    // const max1 = Math.max(...arrValues) // forma 2 de sacar el maximo con EMASCRIP6
    let index = arrValues.indexOf(max) // aqui sacamos la posicion del numero maximo en el array de valores
    const Moda = listArray[index][0] // con la posicion podemos sacar el valor de la moda
    return Moda
}

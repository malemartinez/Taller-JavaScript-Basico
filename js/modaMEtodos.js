
function calcularModa(valores) {
    const [repeticiones, moda] = valores.reduce(
      (acc, val) => {
          const nn = contar(valores, val);
          console.log (acc[0])
          debugger
        if (nn === acc[0] && acc[1].every((item) => item !== val)) {
          acc[1].push(val);
        } else if (nn > acc[0]) {
          acc = [nn, [val]];
        }
        return acc;
      },

      [0, []]
    );
  
    return { repeticiones, moda };
}
  
function contar(arrayElmentos, valorAContar) {
return arrayElmentos.filter((elemento) => elemento === valorAContar).length;
}

const list = [20, 20 , 20, 20, 80, 60, 10, 88]
calcularModa(list)


function calcularMODA (arr){
    // queremos ordenar los valores del array

    const arrOrder = arr.sort( (a,b)=> a - b)

    // queremos contar cuantas veces se repite cada elemento
    function contarElementos (valores, valor){
        let arrRep = valores.filter ( (e => e == valor))
        return arrRep.length
    }

    // variables de control
    let repeticiones = 0
    let moda = []

    for (a of arrOrder){
        let numeroElementos = contarElementos(arrOrder, a)
        if ( numeroElementos == repeticiones ){
            if ( moda.every(i => i != a)) {
                moda.push (a)
                repeticiones = numeroElementos
            }   
        }else if (numeroElementos > repeticiones ) {
            repeticiones = numeroElementos
            moda = [a]
        }
    }
    console.log(` repeticiones: ${repeticiones} moda: ${moda}`) 
}
const list = [20, 20 , 20, 10, 80, 60, 60, 88]
CalcularModa(list)


function CalcularModa (valores){
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
// vamos a crear funciones que me saquen el perimetro y el area de ciertas figuras geometricas.



//Cuadrado 
console.group("cuadrado")

function perimetroCuadrado(lado){
    return lado * 4;
} 

// console.log(`El perímetro del cuadrado es ${perimetroCuadrado} cm`)

function areaCuadrado(lado){
    return lado * lado;
} 
// console.log(`El area del cuadrado es ${areaCuadrado} cm^2`)

console.groupEnd()

// triangulo

console.group("triangulo")

function perimetroTriangulo(lado1, lado2, base){
    return lado1 + lado2 + base 
}
// console.log(`El perímetro del triangulo es ${perimetroTriangulo} cm `)

function areaTriangulo(base, altura){
    return (base * altura) / 2;
}
// console.log(`El area del triangulo es ${areaTriangulo} cm^2`);

function alturaTriangulo(lado1,base){
    const cat1 = lado1**2;
    const cat2 = (base**2) / 4;
    const altura = Math.sqrt(cat1 - cat2);
    const Altura = Math.round(altura)
    return Altura
}
console.groupEnd()

// circulo
console.group("Círculo")

const PI = Math.PI;

function perimetroCirculo(radio){
    return 2 * radio * PI
} 
// console.log(`El perímetro del circulo es ${perimetroCirculo} cm`)

function areaCirculo(radio){
    return PI * radio **2
}
// console.log(`El area del circulo es ${areaCirculo} cm^2 `);

console.groupEnd()


// aqui enlazamos los botones del HTML con javascript

//CUADRADO
function CalcularPerimetroCuadrado(){
    const input = document.getElementById("inputCuadrado"); // aqui traemos el valor que se escribop en el input
    const value = input.value // aqui traemos solo el valor de la variable
    const perimetro = perimetroCuadrado(value);
    const resultText = document.getElementById ("resultPerimetroCuadrado");
    resultText.innerText = `El perímetro del cuadrado es ${perimetro} cm`
}
function CalcularAreaCuadrado(){
    const input = document.getElementById("inputCuadrado"); // aqui traemos el valor que se escribop en el input
    const value = input.value // aqui traemos solo el valor de la variable
    const area = areaCuadrado(value);
    const resultText = document.getElementById ("resultAreaCuadrado");
    resultText.innerText = `El area del cuadrado es ${area} cm^2`
}

// botones para triangulo

function CalcularPerimetroTriangulo(){
    const Lado1 = document.getElementById("inputLado1");
    const Lado2 = document.getElementById("inputLado2");
    const Base = document.getElementById("inputBase");
    const lado1 = Lado1.value;
    const lado2 = Lado2.value;
    const base = Base.value;
    const A = parseInt(lado1);
    const B = parseInt(lado2);
    const C = parseInt(base);
    const Perimetro = perimetroTriangulo(A, B, C);
    
    const resultText = document.getElementById ("resultPerimetroTriangulo");
    resultText.innerText = `El perímetro del Triangulo es ${Perimetro} cm`
}

function CalcularAreaTriangulo(){
    const base = document.getElementById("inputBase")
    const Base =base.value;
    const lado = document.getElementById("inputLado1")
    const Lado = lado.value;
    const altura = alturaTriangulo(Lado, Base);
    const Area = areaTriangulo(Base, altura);

    const resultText = document.getElementById ("resultAreaTriangulo");
    resultText.innerText = `El Area del Triangulo es ${Area} cm^2`
}

// botones para el circulo

function CalcularPerimetroCirculo(){
    const radio = document.getElementById("radioCirculo");
    const Radio = radio.value;

    const Perimetro = perimetroCirculo(Radio);

    // vamos a mostrar en pantalla el resultado con la funcion innerText
    const resultText = document.getElementById ("resultPerimetroCirculo");
    resultText.innerText = `El perímetro del círculo es ${Perimetro.toFixed(4)} cm`
}

function CalcularAreaCirculo(){
    const radio = document.getElementById("radioCirculo");
    const Radio = radio.value;

    const Area = areaCirculo(Radio);
    const resultText = document.getElementById ("resultAreaCirculo");
    resultText.innerText = `El área del círculo es ${Area.toFixed(4)} cm^2`
}
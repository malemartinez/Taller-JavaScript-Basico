// crearemos una calculadora de precios con descuentos para una tienda de articulos

function descuento(precioOriginal, descuento){
    let porcentajeDescuento = (100 - descuento)/100 ;
    return precioOriginal * porcentajeDescuento
}

function calcularPrecioDescuento(){
    const inputPrice = document.getElementById("precioOriginal");
    const PriceValue = inputPrice.value;
    const inputDiscount = document.getElementById("descuento");
    const DiscountValue = inputDiscount.value;

    const resultado = descuento (PriceValue,DiscountValue)
    
    // vamos a mostrar en pantalla el resultado con la funcion innerText
    const resultText = document.getElementById ("resultado");
    resultText.innerText = `El precio final de tu producto es $${resultado}`
}


// forma de hacerlo con objetos (tenemos cupones de descuento y hay que realizar los calculos deacuerdo al tipo de cupon)




/* function calcularPrecioDescuento(){
    const inputPrice = document.getElementById("precioOriginal");
    const PriceValue = inputPrice.value;
    const inputDiscount = document.getElementById("inputCupon");
    const DiscountValue = inputDiscount.value;

    let cupones = [
        {
            nombre: "Marketing a otro nivel",
            descuento: 20,
        },
        {
            nombre: "Desarrollo web es mi pasión",
            descuento:25,
        },
        {
            nombre: "Diseñando un nuevo mundo",
            descuento: 20,
        }
    ]

    //ni idea de como sirve el .find 

    const userCoupon = cupones.find( function(cupones) {
        return cupones.name === DiscountValue;
    });

    console.log (userCoupon)
    const descuento = userCoupon.descuento;

    const resultado = descuento (PriceValue,descuento)
    
    // vamos a mostrar en pantalla el resultado con la funcion innerText
    const resultText = document.getElementById ("resultado");
    resultText.innerText = `El precio final de tu producto es $${resultado}`
}
 */


//buscar como funciona .find()

/* let userCoupon = cupones.find( function (cupon) {
    return cupon.name === couponValue;})
console.log (userCoupon) */


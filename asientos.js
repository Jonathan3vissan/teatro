const leer = require("prompt-sync")();
/*problema tecnico de un puesto e traine 

consigna del problema a resolver

(1 parte)
suponer un sistema de reserva de asientos para un anfiteatro .el teatro cuentas con 10 filas de 10 asientos cada una, se necesita desarollar un 
sistema (sin uso de base de datos ,unicamente manejo de dato de forma logica que permita llevar a cabo lo siguiente:

1- cargar el map de filas y de  asientos indicando con una X los asientos ocupados y con una L los asientos libres. al inciar el programa todos
 lo asiento estan libre

2-maneja la reserva de asientos contemplando que un asiento solo puede ser resevado si se encuentra en estado L  en caso de que este en estado X
se debera permitir al comprador elegir otro asiento
si se ecnuentra en estado L debera pasar automaticamente al estado X

3-para finalizar el programa se debera ingresar un valor en particular. Contemplar que no eciste una cantidad excta de 
veces que el programa se pueda ejecutar

4- Contemplar que spñp ecisten 10 filas  y 10 asientos. No se puede vender asientos fuera de esa numeracion. No se permite sobreventas

**-consideraciones: No es necesaria implementacion ni de IGU ni de BD . se evaluara 100% el manejo logico del desarollo de la aplicacion

***_ extra : en caso de que in cliente solicite visualizar cuales son los asiento libres el sistema deve permitir mostras de forma grafica el mapa de
asientos. NO UTILIZAR	IGU para este caso . utilizar UNICAMENTE logica y la salida por consola
   */


const MAX_CAPAC = 99;
const LIBRE = "L";
const VENDIDO = "X";
const MSJ_LIBRE = "LIBRE";
const MSJ_VENDIDO = "VENDIDO";

let subtotal_asientos_ocupados = 0;
let asiento_libres = 0;
let asiento_ocupados = 0;
let cant_asiento_compra = 0;
let asiento = [];
let sin_cupo = 0;



for (let f = 0; f < MAX_CAPAC; f++) {
    asiento[f] = LIBRE
}
console.log("antes del while");
console.log(asiento.length + 1);

while (MAX_CAPAC >= asiento_ocupados) {

    console.log("desea comprar un asiento para la funcion o mas de uno  ");
    cant_asiento_compra = Number(leer());
    subtotal_asientos_ocupados = subtotal_asientos_ocupados + cant_asiento_compra


    if (asiento_ocupados < asiento.length) {


        for (let c = 0; c < subtotal_asientos_ocupados; c++) {
            asiento[c] = VENDIDO
        }
        asiento_ocupados = asiento_ocupados + cant_asiento_compra;
        asiento_libres = MAX_CAPAC - asiento_ocupados;
        console.log("SEGUIR ESTE NUMERO ", cant_asiento_compra);

        console.log(asiento);
        console.log("ASIENTOS DISPONIBLES:", asiento_libres + 1);
        console.log("CANTIDAD DE ASIENTOS VENDIDOS", asiento_ocupados);

    } else if (asiento_ocupados > MAX_CAPAC) {
        asiento.splice(99, 20)
        console.log("no tenemos esa cantida de asientos disponibles solo nos quedan :", asiento_libres, "asientos");
    }

    sin_cupo = asiento.splice(99, 20)
    console.log("sin cupo", sin_cupo.length);
    asiento_libres = asiento_libres - sin_cupo;


    
}



console.log(asiento);
console.log("ASIENTOS DISPONIBLES despues de eliminar si sobra:", asiento_libres);
console.log("numero de asiento ", asiento.length - asiento_libres);
console.log(asiento.length + 1);



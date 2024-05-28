const leer = require("prompt-sync")();
/*problema tecnico de un puesto e traine 

consigna del problema a resolver

(1 parte)
suponer un sistema de reserva de asientos para un anfiteatro .el teatro cuentas con 10 filas de 10 asientos cada una, se necesita desarollar un 
sistema (sin uso de base de datos ,unicamente manejo de dato de forma logica que permita llevar a cabo lo siguiente:

x   1- cargar el map de filas y de  asientos indicando con una X los asientos ocupados y con una L los asientos libres. al inciar el programa todos lo asiento estan libre  

2-maneja la reserva de asientos contemplando que un asiento solo puede ser resevado si se encuentra en estado L  en caso de que este en estado X
se debera permitir al comprador elegir otro asiento
si se ecnuentra en estado L debera pasar automaticamente al estado X

3-para finalizar el programa se debera ingresar un valor en particular. Contemplar que no existe una cantidad exacta de 
veces que el programa se pueda ejecutar

4- Contemplar que solo existen 10 filas  y 10 asientos. No se puede vender asientos fuera de esa numeracion. No se permite sobreventas

**-consideraciones: No es necesaria implementacion ni de IGU ni de BD . se evaluara 100% el manejo logico del desarollo de la aplicacion

***_ extra : en caso de que in cliente solicite visualizar cuales son los asiento libres el sistema deve permitir mostras de forma grafica el mapa de
asientos. NO UTILIZAR	IGU para este caso . utilizar UNICAMENTE logica y la salida por consola
   */
const MAX_CAPAC = 99;
const LIBRE = "L";
const VENDIDO = "X";
const MSJ_LIBRE = "LIBRE";
const MSJ_VENDIDO = "VENDIDO";
const PREGUNTA_VENDEDOR = "Cuantos asiento va comprar"
const FILAS = 10
const COLUMNAS = 10;

function venta_de_entradas() {
    let asiento = [];
    let control_butacas_vendidas = 0;
    let venta_butacas = 0;
    asiento = iniciar_asientos_libres(asiento)
    console.log("tamaño", asiento.length);


    while (control_butacas_vendidas < MAX_CAPAC); {
        venta_butacas = recibe_cantidad_asientos_comprados()

        asiento = cantidad_asientos_vendidos(asiento, venta_butacas)
        control_butacas_vendidas = venta_butacas + control_butacas_vendidas;
        console.table(asiento);
        console.log("control de ventas dea asientos", control_butacas_vendidas);
    }



}
venta_de_entradas();




/**el vector inicializado en libre
 * 
 * @param {String} vector de asiebtos  
 * @returns vector iniciado libre
*/
function iniciar_asientos_libres(vector) {
    for (let i = 0; i < FILAS; i++) {
        vector[i] = [];
        for (let a = 0; a < COLUMNAS; a++) {
            vector[i][a] = LIBRE;
        }
    } return (vector)
}


/**pide y devuele la cantidad de asientos que comrpa
 * 
 * @returns cantidad de asientos que compra
 */
function recibe_cantidad_asientos_comprados() {
    console.log(PREGUNTA_VENDEDOR);
    let compra_boletos = Number(leer());
    return (compra_boletos)
}

/**que realizar la modificacion de la matriz, mostrando  la ocupacion total
 * 
 * @param {string} matriz que muestra el estados de ocopuacion
 * @param {Number} cant_asiento_compra  por el cliente 
 * @returns matriz ,mostrando ocupacion total
 * 
 */
function cantidad_asientos_vendidos(matriz, venta_parcial) {
    let fila_actual = 0;

    for (let k = 0; k < venta_parcial; k++) {
        if ((k % COLUMNAS === 0) && (k !== 0)) {
            fila_actual = fila_actual + 1;
        }

        matriz[fila_actual][k % COLUMNAS] = VENDIDO;
    }
    console.table(matriz);
    return (matriz)
}




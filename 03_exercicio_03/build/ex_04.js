"use strict";
function formatarSaida(numeros) {
    let saida = "";
    numeros.forEach((item, index) => index != numeros.length - 1 ? saida += `${item}-` : saida += `${item}`);
    return saida;
}
let numeros = new Array(1, 2, 3, 4, 5, 6, 7, 8, 9);
let saida = formatarSaida(numeros);
console.log(saida);

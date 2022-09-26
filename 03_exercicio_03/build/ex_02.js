"use strict";
function ehPrimo(numero) {
    let qtdDivisores = 0;
    for (let i = 2; i <= numero; i++) {
        if (numero % i == 0) {
            qtdDivisores++;
        }
        if (qtdDivisores > 1) {
            return false;
        }
    }
    return true;
}
const ehNumPrimo = ehPrimo(10);
console.log(ehNumPrimo);

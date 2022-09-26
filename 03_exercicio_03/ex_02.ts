function ehPrimo(numero: number ) : boolean {
    let qtdDivisores: number = 0;

    for( let i = 2; i <= numero; i++) {
        if(numero % i == 0) {
            qtdDivisores++;
        }

        if(qtdDivisores > 1) {
            return false;
        }
    }

    return true
}

const ehNumPrimo: boolean = ehPrimo(10);
console.log(ehNumPrimo);
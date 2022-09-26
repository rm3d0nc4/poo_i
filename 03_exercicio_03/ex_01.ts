function ehPar( numero: number): boolean {
    if(numero % 2 == 0) {
        return true;
    } else {
        return false;
    }
}

let numero: number = 4
let numEhPar : boolean = ehPar(numero);
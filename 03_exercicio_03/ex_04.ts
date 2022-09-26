function formatarSaida(numeros: Array<number>) : string {
    let saida: string = "";
    
    numeros.forEach((item, index) => index != numeros.length -1 ? saida += `${item}-` :saida += `${item}`);

    return saida;
}

let numeros : Array<number> = new Array(1,2,3,4,5,6,7,8,9);

let saida: string = formatarSaida(numeros);
console.log(saida);
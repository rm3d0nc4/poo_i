import { InputError } from "./errors";

export const input = require('prompt-sync')();
export const print = (message: string) => console.log(message);

export function lerNumeroConta(message?: string): string {
    let numero: number = Number(input(message ?? 'Digite o número da conta: '));
    if(isNaN(Number(numero)) || numero <= 0) {
        throw new InputError('O valor inserido não é um número de conta.  Tente novamente!');
    }
    return numero.toString();        
}

export function lerValorInteiro(message?: string): number {
let numero: number = Number(input(message ?? 'Digite o valor: '));
if( isNaN(numero)) {
    throw new InputError('Valor Inválido. Por favor digite um número!');
}
return numero;
}

export function lerTexto(message: string): string {
let entrada: string = input(message);
if(entrada.length == 0) {
    throw new InputError('Valor de Entrada Inválido!');
}
return entrada;
}

export function getTipoConta(): string {
    print("\nSelecionar tipo de conta\n");
    print('>Conta Convencial - C \n >Conta Poupança - P \n >Conta Imposto - I');
    
    let tipo = input('Tipo de conta (P/C/I): ').toUpperCase();

    if(tipo != 'P' && tipo != 'C' && tipo != 'I') {
        throw new InputError('Tipo de conta inválido. Tente novamente!');
    }
    return tipo;      
}
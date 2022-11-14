"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTipoConta = exports.lerTexto = exports.lerValorInteiro = exports.lerNumeroConta = exports.print = exports.input = void 0;
const errors_1 = require("./errors");
exports.input = require('prompt-sync')();
const print = (message) => console.log(message);
exports.print = print;
function lerNumeroConta(message) {
    let numero = Number((0, exports.input)(message !== null && message !== void 0 ? message : 'Digite o número da conta: '));
    if (isNaN(Number(numero)) || numero <= 0) {
        throw new errors_1.InputError('O valor inserido não é um número de conta.  Tente novamente!');
    }
    return numero.toString();
}
exports.lerNumeroConta = lerNumeroConta;
function lerValorInteiro(message) {
    let numero = Number((0, exports.input)(message !== null && message !== void 0 ? message : 'Digite o valor: '));
    if (isNaN(numero)) {
        throw new errors_1.InputError('Valor Inválido. Por favor digite um número!');
    }
    return numero;
}
exports.lerValorInteiro = lerValorInteiro;
function lerTexto(message) {
    let entrada = (0, exports.input)(message);
    if (typeof (entrada) != 'string') {
        throw new errors_1.InputError('Valor de Entrada Inválido!');
    }
    return entrada;
}
exports.lerTexto = lerTexto;
function getTipoConta() {
    (0, exports.print)("\nSelecionar tipo de conta\n");
    (0, exports.print)('>Conta Convencial - C \n >Conta Poupança - P \n >Conta Imposto - I');
    let tipo = (0, exports.input)('Tipo de conta (P/C/I): ').toUpperCase();
    if (tipo != 'P' && tipo != 'C' && tipo != 'I') {
        throw new errors_1.InputError('Tipo de conta inválido. Tente novamente!');
    }
    return tipo;
}
exports.getTipoConta = getTipoConta;

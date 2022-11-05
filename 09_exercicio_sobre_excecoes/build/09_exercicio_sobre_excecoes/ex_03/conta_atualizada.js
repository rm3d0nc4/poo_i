"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const conta_1 = __importDefault(require("../../07_exercicio_07/ex_04/conta"));
class ContaAtualizada extends conta_1.default {
    constructor(titular, numero, saldo = 0) {
        super(titular, numero, saldo);
    }
    sacar(valor) {
        if (valor > this.saldo) {
            throw new Error("Saldo insuficiente!");
        }
        else {
            return super.sacar(valor);
        }
    }
}
exports.default = ContaAtualizada;
/*  Achei interessante criar uma nova classe que extende de Conta
    e sobrescrever o método sacar. Mas eu poderia copiar toda a
    classe Conta e alterar o método. Seque abaixo o método
    implementado dessa forma:

    ...

    sacar(valor: number): void {
        if(valor > this.saldo) {
            throw new Error("Saldo insuficiente!");
        } else {
            this.sacar(valor);
        }
    }

    ...

*/

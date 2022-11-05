"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const banco_1 = __importDefault(require("../07_exercicio_07/ex_04/banco"));
const conta_atualizada_1 = __importDefault(require("./ex_03/conta_atualizada"));
class ContaAtualizada2 extends conta_atualizada_1.default {
    constructor(titular, numero, saldo = 0) {
        if (saldo < 0) {
            throw new Error('Falha ao criar conta: saldo negativo!');
        }
        else {
            super(titular, numero, saldo);
        }
    }
    depositar(valor) {
        if (valor <= 0) {
            throw new Error('Depósito inválido: valor menor ou igual a 0!');
        }
        else {
            super.depositar(valor);
        }
    }
}
exports.default = ContaAtualizada2;
let conta1 = new ContaAtualizada2('Romero', '1', 200);
let conta2 = new ContaAtualizada2('Samilla', '2', 400);
let banco = new banco_1.default();
banco.inserir(conta1);
banco.inserir(conta2);
// banco.depositar('1', 0); // ERRO
// banco.transferir('2', '1', 350); // ERRO
banco.inserir(new ContaAtualizada2('Ana Maria', '3', -150));

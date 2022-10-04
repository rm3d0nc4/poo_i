"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
let prompt = require("prompt-sync")();
const input = prompt();
const banco_1 = __importDefault(require("../ex_01/banco"));
const operacoes_banco_1 = __importDefault(require("./operacoes_banco"));
let opcao = -1;
let operacaoAtual;
const banco = new banco_1.default();
const bancoOp = new operacoes_banco_1.default(banco);
const opcoes = "==================Bem-vindo==================" +
    "Digite uma opção:" +
    "1 - Cadastrar    2 - Consultar   3 - Sacar\n" +
    "4 - Depositar    5 - Excluir     6 - Transferir\n" +
    "7 - Totalizações\n" +
    "0 - Sair\n";
const operacoes = new Array(bancoOp.cadastrar, bancoOp.consultar, bancoOp.sacar, bancoOp.depositar, bancoOp.excluir, bancoOp.transferir, bancoOp.totalizacoes);
do {
    console.log(opcoes);
    opcao = Number(input());
    operacaoAtual = operacoes[opcao + 1];
    // operacaoAtual();
    input("Operação finalizada. Digite <enter>");
} while (opcao != 0);

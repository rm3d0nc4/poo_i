"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const input = require('prompt-sync')();
const print = (message) => console.log(message);
const banco_1 = __importDefault(require("../ex_01/banco"));
const conta_1 = __importDefault(require("../ex_01/conta"));
const ehNumeroValido = (numero) => [1, 2, 3, 4, 5, 6, 7, 0].indexOf(numero) != -1;
function cadastrar() {
    print("\nCadastrar conta\n");
    let numero = input('Digite o número da conta: ');
    let titular = input('Digite o seu nome: ');
    let conta;
    conta = new conta_1.default(titular, numero);
    banco.inserir(conta);
}
function consultar() {
    print("\nConsultar conta\n");
    let numero = input('Digite o número da conta: ');
    let conta = banco.consultar(numero);
    if (conta != undefined) {
        print(`\nTitular: ${conta.titular}, numero: ${conta.numero}\n`);
    }
    else {
        print(`\nConta não encontrada!\n`);
    }
}
function sacar() {
    print("\nSaque\n");
    let numero = input('Digite o número da conta: ');
    let valor = Number(input(`Valor: `));
    banco.sacar(numero, valor);
}
function depositar() {
    print("\nDepósito\n");
    let numero = input('Digite o número da conta: ');
    let valor = Number(input(`Valor: `));
    banco.depositar(numero, valor);
}
function transferir() {
    print("\nTransferência\n");
    let numeroCredito = input('Digite o número da conta a ser creditada: ');
    let numeroDebito = input('Digite o número da conta a ser debitada: ');
    let valor = input(`Valor: `);
    banco.transferir(numeroCredito, numeroDebito, valor);
}
function excluir() {
    print("\nExcluir conta\n");
    let numero = input('Digite o número da conta: ');
    let exclusao = input('Confirmar (S/N): ');
    if (exclusao.toLocaleUpperCase() == 'S') {
        banco.excluir(numero);
        print("conta excluída");
    }
    else if (exclusao.toLocaleUpperCase() == 'N') {
        print("conta mantida");
    }
}
function totalizacoes() {
    print("\nTotalizações do banco\n");
    let qtdContas = banco.quantidadeContas();
    let totalDepositado = banco.totalDepositado();
    let mediaSaldo = banco.mediaSaldo();
    print(`Quantidade de contas: ${qtdContas} `);
    print(`Total depositdado: ${totalDepositado} `);
    print(`Média de saldo por conta: ${mediaSaldo} \n`);
}
const operacoes = new Array(cadastrar, consultar, sacar, depositar, excluir, transferir, totalizacoes);
let opcao = -1;
let operacaoAtual;
const banco = new banco_1.default();
const opcoes = "==================Bem-vindo==================\n" +
    "Digite uma opção:\n" +
    "1 - Cadastrar    2 - Consultar   3 - Sacar\n" +
    "4 - Depositar    5 - Excluir     6 - Transferir\n" +
    "7 - Totalizações\n" +
    "0 - Sair\n";
while (true) {
    print(opcoes);
    opcao = Number(input('Opção: '));
    if (ehNumeroValido(opcao)) {
        if (opcao != 0) {
            operacaoAtual = operacoes[opcao - 1];
            operacaoAtual();
        }
        else {
            print("Saindo...");
            break;
        }
    }
    else {
        print("Opção inválida!");
    }
    input("Operação finalizada. Digite <enter>");
    console.clear();
}

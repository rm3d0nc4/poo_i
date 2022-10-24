"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const banco_1 = __importDefault(require("./banco"));
const conta_1 = __importDefault(require("./conta"));
const conta_imposto_1 = __importDefault(require("./conta_imposto"));
const poupanca_1 = __importDefault(require("./poupanca"));
const fs = __importStar(require("fs"));
const input = require('prompt-sync')();
const print = (message) => console.log(message);
const ehNumeroValido = (numero) => [1, 2, 3, 4, 5, 6, 7, 8, 9, 0].indexOf(numero) != -1;
function getTipoConta() {
    let tipo = '-1';
    while (!('PC'.includes(tipo.toUpperCase()))) {
        print("\nSelecionar tipo de conta\n");
        print('>Conta Convencial - C \n >Conta Poupança - P \n >Conta Imposto');
        tipo = input('Tipo de conta (P/C/I): ').toUpperCase();
        if (!('PCI'.includes(tipo.toUpperCase()))) {
            print('Opção Inválida!\n');
        }
    }
    return tipo;
}
function cadastrar() {
    print("\nCadastrar conta\n");
    let numero = input('Digite o número da conta: ');
    let titular = input('Digite o seu nome: ');
    let tipoConta = getTipoConta();
    let conta = criarConta(numero, titular, tipoConta);
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
    print(`Média de saldo por conta: ${mediaSaldo.toFixed(2)} \n`);
}
function renderJuros() {
    print("\nRender Juros\n");
    let numero = input('Digite o número da conta: ');
    banco.renderJuros(numero);
}
function criarConta(numero, titular, tipoConta) {
    let conta;
    switch (tipoConta) {
        case 'P':
            let taxaJuros = Number(input('Digite a taxa juros: '));
            conta = new poupanca_1.default(titular, numero, 0, taxaJuros);
            break;
        case 'I':
            let taxaDeDesconto = Number(input('Digite a taxa de desconto: '));
            conta = new conta_imposto_1.default(titular, numero, 0, taxaDeDesconto);
            break;
        case 'C':
            conta = new conta_1.default(titular, numero);
            break;
        default:
            break;
    }
    return conta;
}
function lerArquivo() {
    let caminho = input('Caminho do arquivo: ');
    let contas = fs.readFileSync(caminho).toString().split('\n');
    for (let conta of contas) {
        let objConta;
        let dadosConta = conta.split('; ');
        let [tipo, nome, numeroConta, saldo, taxa] = dadosConta;
        if (tipo == 'P') {
            objConta = new poupanca_1.default(nome, numeroConta, Number(saldo), Number(taxa));
        }
        else if (tipo == 'I') {
            objConta = new conta_imposto_1.default(nome, numeroConta, Number(saldo), Number(taxa));
        }
        else {
            objConta = new conta_1.default(nome, numeroConta, Number(saldo));
        }
        banco.inserir(objConta);
    }
}
const operacoes = new Array(cadastrar, consultar, sacar, depositar, excluir, transferir, totalizacoes, renderJuros, lerArquivo);
let opcao = -1;
let operacaoAtual;
const banco = new banco_1.default();
const opcoes = "==================Bem-vindo==================\n" +
    "Digite uma opção:\n" +
    "1 - Cadastrar    2 - Consultar   3 - Sacar\n" +
    "4 - Depositar    5 - Excluir     6 - Transferir\n" +
    "7 - Totalizações   8 - Render Juros    9 - Ler Arquivo\n" +
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
    input("Operação finalizada.\n>Digite <enter>");
    console.clear();
}
// "./../../ex_04/contas.txt"

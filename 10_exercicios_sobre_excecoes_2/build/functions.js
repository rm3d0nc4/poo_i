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
exports.operacoes = exports.ehNumeroValido = void 0;
const banco_1 = __importDefault(require("./classes/banco"));
const conta_1 = __importDefault(require("./classes/conta"));
const conta_imposto_1 = __importDefault(require("./classes/conta_imposto"));
const conta_poupanca_1 = __importDefault(require("./classes/conta_poupanca"));
const fs = __importStar(require("fs"));
const errors_1 = require("./errors");
const utils_1 = require("./utils");
const banco = new banco_1.default();
function ehNumeroValido(numero) {
    if ([1, 2, 3, 4, 5, 6, 7, 8, 9].indexOf(numero) == -1) {
        throw new errors_1.InputError('Opção inválida!');
    }
}
exports.ehNumeroValido = ehNumeroValido;
function validarValorExclusao(valor) {
    if (valor != 'S' && valor != 'N') {
        throw new errors_1.InputError(" O valor de entrada deve ser 'S' (sim) ou 'N' (não)!");
    }
}
function cadastrar() {
    (0, utils_1.print)("\nCadastrar conta\n");
    try {
        let numero = (0, utils_1.lerNumeroConta)();
        let titular = (0, utils_1.input)('Digite o seu nome: ');
        let tipoConta = (0, utils_1.getTipoConta)();
        let valorInicial = (0, utils_1.lerValorInteiro)('Digite o saldo inicial: ');
        let conta = criarConta(numero, titular, tipoConta, valorInicial);
        banco.inserir(conta);
    }
    catch (error) {
        (0, utils_1.print)(error.message);
    }
}
function consultar() {
    (0, utils_1.print)("\nConsultar conta\n");
    try {
        let numero = (0, utils_1.lerNumeroConta)();
        let conta = banco.consultar(numero);
        (0, utils_1.print)(`\nTitular: ${conta.titular}, numero: ${conta.numero}, saldo: ${conta.saldo}\n`);
    }
    catch (error) {
        (0, utils_1.print)(error.message);
    }
}
function sacar() {
    (0, utils_1.print)("\nSaque\n");
    try {
        let numero = (0, utils_1.lerNumeroConta)();
        let valor = (0, utils_1.lerValorInteiro)();
        banco.sacar(numero, valor);
    }
    catch (error) {
        (0, utils_1.print)(error.message);
    }
}
function depositar() {
    (0, utils_1.print)("\nDepósito\n");
    try {
        let numero = (0, utils_1.lerNumeroConta)();
        let valor = (0, utils_1.lerValorInteiro)();
        banco.depositar(numero, valor);
    }
    catch (error) {
        (0, utils_1.print)(error.message);
    }
}
function transferir() {
    (0, utils_1.print)("\nTransferência\n");
    try {
        let numeroCredito = (0, utils_1.lerNumeroConta)('Digite o número da conta a ser creditada: ');
        let numeroDebito = (0, utils_1.lerNumeroConta)('Digite o número da conta a ser debitada: ');
        let valor = (0, utils_1.lerValorInteiro)();
        banco.transferir(numeroCredito, numeroDebito, valor);
    }
    catch (error) {
        (0, utils_1.print)(error.message);
    }
}
function excluir() {
    (0, utils_1.print)("\nExcluir conta\n");
    try {
        let numero = (0, utils_1.lerNumeroConta)();
        let exclusao = (0, utils_1.input)('Confirmar (S/N): ').toUpperCase();
        validarValorExclusao(exclusao);
        if (exclusao == 'S')
            banco.excluir(numero);
    }
    catch (error) {
        (0, utils_1.print)(error.message);
    }
}
function totalizacoes() {
    (0, utils_1.print)("\nTotalizações do banco\n");
    let qtdContas = banco.quantidadeContas();
    let totalDepositado = banco.totalDepositado();
    let mediaSaldo = banco.mediaSaldo();
    (0, utils_1.print)(`Quantidade de contas: ${qtdContas} `);
    (0, utils_1.print)(`Total depositdado: ${totalDepositado} `);
    (0, utils_1.print)(`Média de saldo por conta: ${mediaSaldo.toFixed(2)} \n`);
}
function renderJuros() {
    (0, utils_1.print)("\nRender Juros\n");
    try {
        let numero = (0, utils_1.lerNumeroConta)();
        banco.renderJuros(numero);
    }
    catch (error) {
        (0, utils_1.print)(error.message);
    }
}
function criarConta(numero, titular, tipoConta, valorInicial) {
    let conta;
    switch (tipoConta) {
        case 'P':
            let taxaJuros = (0, utils_1.lerValorInteiro)('Digite a taxa juros: ');
            conta = new conta_poupanca_1.default(titular, numero, valorInicial, taxaJuros);
            break;
        case 'I':
            let taxaDeDesconto = (0, utils_1.lerValorInteiro)('Digite a taxa de desconto: ');
            conta = new conta_imposto_1.default(titular, numero, valorInicial, taxaDeDesconto);
            break;
        case 'C':
            conta = new conta_1.default(titular, numero, valorInicial);
            break;
        default:
            break;
    }
    return conta;
}
function lerArquivo() {
    try {
        let caminho = (0, utils_1.lerTexto)('Caminho do arquivo: ');
        let contas = fs.readFileSync(caminho).toString().split('\n');
        for (let conta of contas) {
            let objConta;
            let dadosConta = conta.split('; ');
            let [tipo, nome, numeroConta, saldo, taxa] = dadosConta;
            if (tipo == 'P') {
                objConta = new conta_poupanca_1.default(nome, numeroConta, Number(saldo), Number(taxa));
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
    catch (error) {
        console.log(error.message);
    }
}
exports.operacoes = new Array(cadastrar, consultar, sacar, depositar, excluir, transferir, totalizacoes, renderJuros, lerArquivo);

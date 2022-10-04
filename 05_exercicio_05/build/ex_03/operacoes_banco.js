"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const conta_1 = __importDefault(require("../ex_01/conta"));
class OperacoesBanco {
    constructor(banco) {
        this.banco = banco;
    }
    cadastrar() {
        console.log("\nCadastrar conta\n");
        let numero = '' /* input('Digite o número da conta: ') */;
        let titular = '' /* input('Digite o seu nome: ') */;
        let conta;
        conta = new conta_1.default(titular, numero);
        this.banco.inserir(conta);
    }
    consultar() {
        console.log("\nConsultar conta\n");
        let numero = '' /* input('Digite o número da conta: ') */;
        let conta = this.banco.consultar(numero);
        console.log(`\nTitular: ${conta.titular}, numero: ${conta.numero}\n`);
    }
    sacar() {
        console.log("\nSaque\n");
        let numero = '' /* input('Digite o número da conta: ') */;
        let valor = 0 /* input(`Valor: `) */;
        this.banco.sacar(numero, valor);
    }
    depositar() {
        console.log("\nDepósito\n");
        let numero = '' /* input('Digite o número da conta: ') */;
        let valor = 0 /* input(`Valor: `) */;
        this.banco.depositar(numero, valor);
    }
    transferir() {
        console.log("\nTransferência\n");
        let numeroCredito = '' /* input('Digite o número da conta a ser creditada: ') */;
        let numeroDebito = '' /* input('Digite o número da conta a ser debitada: ') */;
        let valor = 0 /* input(`Valor: `) */;
        this.banco.transferir(numeroCredito, numeroDebito, valor);
    }
    excluir() {
        console.log("\nExcluir conta\n");
        let numero = '' /* input('Digite o número da conta: ') */;
        let exclusao = '' /* input('Confirmar (S/N): ') */;
        if (exclusao.toLocaleUpperCase() == 'S') {
            this.banco.excluir(numero);
            console.log("conta excluída");
        }
        else if (exclusao.toLocaleUpperCase() == 'N') {
            console.log("conta mantida");
        }
    }
    totalizacoes() {
        console.log("\nTotalizações do banco\n");
        let qtdContas = this.banco.quantidadeContas;
        let totalDepositado = this.banco.totalDepositado;
        let mediaSaldo = this.banco.mediaSaldo;
        console.log(`Quantidade de contas: ${qtdContas} `);
        console.log(`Total depositdado: ${totalDepositado} `);
        console.log(`Média de saldo por conta: ${mediaSaldo} \n`);
    }
}
exports.default = OperacoesBanco;

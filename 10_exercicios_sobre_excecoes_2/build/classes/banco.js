"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const conta_poupanca_1 = __importDefault(require("./conta_poupanca"));
const errors_1 = require("../errors");
class Banco {
    constructor(contas = []) {
        this._contas = contas;
    }
    consultarIndice(numero) {
        for (let index = 0; index < this._contas.length; index++) {
            if (this._contas[index].numero == numero) {
                return index;
            }
        }
        throw new errors_1.ContaInexistenteError('Conta não encontrada!');
    }
    inserir(conta) {
        try {
            this.consultarIndice(conta.numero);
            throw new errors_1.ApplicacaoError(`Falha. Conta ${conta.numero} já existe!`);
        }
        catch (error) {
            if (error instanceof errors_1.ContaInexistenteError) {
                this._contas.push(conta);
            }
            else {
                console.log(error.message);
            }
        }
    }
    consultar(numero) {
        // Poderia fazer também fazer um bloco try catch 
        // envolvendo o metodo consultarIndice
        for (let conta of this._contas) {
            if (conta.numero == numero) {
                return conta;
            }
        }
        throw new errors_1.ContaInexistenteError('Conta não encontrada!');
    }
    alterar(c) {
        try {
            let indice = this.consultarIndice(c.numero);
            this._contas[indice] = c;
        }
        catch (error) {
            console.log(error.message);
        }
    }
    excluir(numero) {
        try {
            let indice = this.consultarIndice(numero);
            this._contas.splice(indice, 1);
        }
        catch (error) {
            console.log(error.message);
        }
    }
    depositar(numero, valor) {
        try {
            let conta = this.consultar(numero);
            conta.depositar(valor);
        }
        catch (error) {
            console.log(error.message);
        }
    }
    sacar(numero, valor) {
        try {
            let conta = this.consultar(numero);
            conta.debitar(valor);
        }
        catch (error) {
            console.log(error.message);
        }
    }
    transferir(numeroCredito, numeroDebito, valor) {
        try {
            let contaCredito = this.consultar(numeroCredito);
            let contaDebito = this.consultar(numeroDebito);
            contaDebito.transferir(contaCredito, valor);
        }
        catch (error) {
            console.log(error.message);
        }
    }
    quantidadeContas() {
        return this._contas.length;
    }
    totalDepositado() {
        let total = 0;
        if (this.quantidadeContas() != 0) {
            let saldos = this._contas.map((conta) => conta.saldo);
            total = saldos.reduce((previous, current) => previous += current);
        }
        return total;
    }
    mediaSaldo() {
        let media = this.totalDepositado() / this.quantidadeContas();
        return media;
    }
    renderJuros(numero) {
        try {
            let conta = this.consultar(numero);
            if (conta instanceof conta_poupanca_1.default) {
                conta.renderJuros();
            }
            else {
                throw new errors_1.ContaInexistenteError('Conta Poupança não encontrada');
            }
        }
        catch (error) {
            console.log(error.message);
        }
    }
}
exports.default = Banco;

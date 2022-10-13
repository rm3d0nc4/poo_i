"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Banco {
    constructor(contas = []) {
        this._contas = contas;
    }
    consultarIndice(numero) {
        let indice = -1;
        for (let i = 0; i < this._contas.length; i++) {
            if (this._contas[i].numero == numero) {
                indice = i;
                break;
            }
        }
        return indice;
    }
    inserir(conta) {
        if (this.consultarIndice(conta.numero) == -1) {
            this._contas.push(conta);
        }
    }
    consultar(numero) {
        let contaProcurada;
        for (let c of this._contas) {
            if (c.numero == numero) {
                contaProcurada = c;
                break;
            }
        }
        return contaProcurada;
    }
    alterar(c) {
        let indice = this.consultarIndice(c.numero);
        if (indice != -1) {
            this._contas[indice] = c;
        }
    }
    excluir(numero) {
        let indice = this.consultarIndice(numero);
        // if (indice != -1) {
        //     for (let i: number = indice; i < this.contas.length; i++) {
        //         this.contas[i] = this.contas[i + 1];
        //     }
        //     this.contas.pop();
        // }
        this._contas.splice(indice, 1);
    }
    depositar(numero, valor) {
        let conta = this.consultar(numero);
        if (conta != null) {
            conta.depositar(valor);
        }
    }
    sacar(numero, valor) {
        let conta = this.consultar(numero);
        if (conta != null) {
            conta.sacar(valor);
        }
    }
    transferir(numeroCredito, numeroDebito, valor) {
        let contaCredito = this.consultar(numeroCredito);
        let contaDebito = this.consultar(numeroDebito);
        contaDebito.transferir(contaCredito, valor);
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
}
exports.default = Banco;

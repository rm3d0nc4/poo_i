"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Banco {
    constructor(contas = []) {
        this.contas = contas;
    }
    inserir(conta) {
        if (this.consultarIndice(conta.numero) == -1) {
            this.contas.push(conta);
        }
    }
    consultar(numero) {
        let contaProcurada;
        for (let c of this.contas) {
            if (c.numero == numero) {
                contaProcurada = c;
                break;
            }
        }
        return contaProcurada;
    }
    consultarIndice(numero) {
        let indice = -1;
        for (let i = 0; i < this.contas.length; i++) {
            if (this.contas[i].numero == numero) {
                indice = i;
                break;
            }
        }
        return indice;
    }
    alterar(c) {
        let indice = this.consultarIndice(c.numero);
        if (indice != -1) {
            this.contas[indice] = c;
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
        this.contas.splice(indice, 1);
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
        return this.contas.length;
    }
    totalDepositado() {
        let total = 0;
        if (this.quantidadeContas() != 0) {
            let saldos = this.contas.map((conta) => conta.meuSaldo());
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

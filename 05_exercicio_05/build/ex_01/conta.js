"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Conta {
    constructor(titular, numero, saldo = 0) {
        this.titular = titular;
        this.numero = numero;
        this.saldo = saldo;
    }
    get meuSaldo() {
        return this.saldo;
    }
    sacar(valor) {
        if (this.saldo >= valor) {
            this.saldo = this.saldo - valor;
            return true;
        }
        else {
            return false;
        }
    }
    transferir(contaDestino, valor) {
        if (this.sacar(valor)) {
            contaDestino.depositar(valor);
            return true;
        }
        else {
            return false;
        }
    }
    depositar(valor) {
        this.saldo = this.saldo + valor;
    }
    consultarSaldo() {
        return this.saldo;
    }
}
exports.default = Conta;

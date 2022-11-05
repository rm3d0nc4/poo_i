"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Conta {
    constructor(titular, numero, saldo = 0) {
        this._titular = titular;
        this._numero = numero;
        this._saldo = saldo;
    }
    get numero() {
        return this._numero;
    }
    get saldo() {
        return this._saldo;
    }
    get titular() {
        return this._titular;
    }
    sacar(valor) {
        if (this._saldo >= valor) {
            this._saldo = this._saldo - valor;
            return true;
        }
        else {
            return false;
        }
    }
    debitar(valor) {
        return this.sacar(valor);
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
        this._saldo = this._saldo + valor;
    }
}
exports.default = Conta;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const errors_1 = require("../errors");
class Conta {
    constructor(titular, numero, saldoInicial) {
        this._saldo = 0;
        this._titular = titular;
        this._numero = numero;
        try {
            this.depositar(saldoInicial);
        }
        catch (error) {
            this._saldo = 0;
        }
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
        this._validarValor(valor);
        if (valor > this.saldo) {
            throw new errors_1.SaldoInsuficienteError('Saldo insuficiente');
        }
        else {
            this._saldo = this._saldo - valor;
        }
    }
    debitar(valor) {
        this.sacar(valor);
    }
    transferir(contaDestino, valor) {
        this.sacar(valor);
        contaDestino.depositar(valor);
    }
    depositar(valor) {
        this._validarValor(valor);
        this._saldo = this._saldo + valor;
    }
    _validarValor(valor) {
        if (valor <= 0) {
            throw new errors_1.ValorInvalidoError('Valor inválido');
        }
    }
}
exports.default = Conta;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SeguroDeVida = exports.ContaCorrente = exports.Conta = void 0;
class Conta {
    constructor(nome, saldo) {
        this._nome = nome;
        this._saldo = saldo;
    }
    getNome() {
        return this._nome;
    }
    setNome(nome) {
        this._nome = nome;
    }
    getSaldo() {
        return this._saldo;
    }
    setSaldo(saldo) {
        this._saldo = saldo;
    }
}
exports.Conta = Conta;
class ContaCorrente extends Conta {
    constructor(nome, saldo) {
        super(nome, saldo);
    }
    calculaTributos() {
        return this.getSaldo() * .1;
    }
}
exports.ContaCorrente = ContaCorrente;
class SeguroDeVida {
    calculaTributos() {
        return 50;
    }
}
exports.SeguroDeVida = SeguroDeVida;

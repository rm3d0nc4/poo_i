"use strict";
class Conta {
    constructor(numero, saldo) {
        this.numero = numero;
        this.saldo = saldo;
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
let c1 = new Conta("1", 100);
console.log(c1.sacar(110));
console.log(c1.sacar(20));
let c2 = new Conta("2", 100);
console.log(c1.transferir(c2, 100));
console.log(c1.transferir(c2, 20));

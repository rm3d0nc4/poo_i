"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Calculadora {
    constructor(operando1, operando2) {
        this._operando1 = operando1;
        this._operando2 = operando2;
    }
    soma() {
        return this._operando1 + this._operando2;
    }
}
exports.default = Calculadora;
let calc1 = new Calculadora(2, 4);
let calc2 = new Calculadora(1, 5);
// calc1.operando1 // Os atributos ficam acessíveis apenas no escopo da classe
console.log(calc1.soma());
console.log(calc2.soma());

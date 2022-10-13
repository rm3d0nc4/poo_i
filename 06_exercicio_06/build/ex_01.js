"use strict";
class Calculadora {
    constructor(operando1, operando2) {
        this.operando1 = operando1;
        this.operando2 = operando2;
    }
    soma() {
        return this.operando1 + this.operando2;
    }
    produto() {
        return this.operando1 * this.operando2;
    }
}
let calc1 = new Calculadora(2, 4);
let calc2 = new Calculadora(1, 5);
// calc1.operando1 // Os atributos ficam acessíveis apenas no escopo da classe
console.log(calc1.produto());
console.log(calc1.soma());
console.log(calc2.produto());
console.log(calc2.soma());

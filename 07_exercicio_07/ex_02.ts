export default class Calculadora {
    private _operando1: number;
    private _operando2: number;

    get operando1(): number {
        return this._operando1;
    }

    get operando2(): number {
        return this._operando2;
    }
    constructor(operando1: number, operando2: number) {
        this._operando1 = operando1;
        this._operando2 = operando2;
    }

    soma(): number {
        return this._operando1 + this._operando2;
    }

}


let calc1: Calculadora = new Calculadora(2, 4);
let calc2: Calculadora = new Calculadora(1, 5);
// calc1.operando1 // Os atributos ficam acessíveis apenas no escopo da classe

console.log(calc1.soma());
console.log(calc2.soma());
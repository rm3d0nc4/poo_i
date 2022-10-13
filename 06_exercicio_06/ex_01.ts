class Calculadora {
    private operando1: number;
    private operando2: number;

    constructor(operando1: number, operando2: number) {
        this.operando1 = operando1;
        this.operando2 = operando2;
    }

    soma(): number {
        return this.operando1 + this.operando2;
    }

    produto(): number {
        return this.operando1 * this.operando2; 
    }
}


let calc1: Calculadora = new Calculadora(2, 4);
let calc2: Calculadora = new Calculadora(1, 5);
// calc1.operando1 // Os atributos ficam acessíveis apenas no escopo da classe

console.log(calc1.produto());
console.log(calc1.soma());

console.log(calc2.produto());
console.log(calc2.soma());
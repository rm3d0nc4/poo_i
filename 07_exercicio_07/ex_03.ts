import Calculadora from "./ex_02";

class CalculadoraCientifica extends Calculadora {

    constructor(operando1: number, operando2: number) {
        super(operando1, operando2);
    }

    exponenciar() {
        return this._operando1 ** this._operando2;
    }
}


let calculadoraCientifica1 : CalculadoraCientifica = new CalculadoraCientifica(4,2);

console.log(calculadoraCientifica1.exponenciar());
console.log(calculadoraCientifica1.soma());

/* 
    Para fazer com que a operação 'exponenciar' fosse feita, foi necessário o uso
    do modificador 'protected' para que os atributos pudessem ser acessados na
    subclasse. Outra forma fazer isso seria criando getters na super classe */
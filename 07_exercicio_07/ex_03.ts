import Calculadora from "./ex_02";

class CalculadoraCientifica extends Calculadora {

    constructor(operando1: number, operando2: number) {
        super(operando1, operando2);
    }

    exponenciar() {
        return this.operando1 ** this.operando2;
    }
}


let calculadoraCientifica1 : CalculadoraCientifica = new CalculadoraCientifica(4,2);

console.log(calculadoraCientifica1.exponenciar());
console.log(calculadoraCientifica1.soma());

/* 
    Para fazer com que a operação 'exponenciar' fosse feita, foi necessária a criação de
    métodos de leituras dos atributos na super classe. Outra forma de contornar esse
    problema seria usando o modificador 'protected' para que os atributos pudessem ser 
    acessados na subclasse.*/
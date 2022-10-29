import Empregado from "./empregado";

export default class Diarista extends Empregado {

    calcularSalario(): number {
        return this.salario / 30;
    }
}
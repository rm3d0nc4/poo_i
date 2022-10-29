import Funcionario from "./ex_03";

export default class Professor extends Funcionario {
    private _titulacao: string;

    constructor(nome: string, sobrenome: string, matricula: string, salario: number, titulacao: string) {
        super(nome, sobrenome, matricula, salario);
        this._titulacao = titulacao;
    }

    get titulacao(): string {
        return this._titulacao
    }

    calcularSalarioPrimeiraParcela(): number {
        return this.salario;
    }

    calcularSalarioSegundaParcela(): number {
        return 0;
    }
}
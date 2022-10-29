import Pessoa from "./ex_02";

export default class Funcionario extends Pessoa {
    private _matricula: string;
    private _salario: number;

    constructor(nome: string, sobrenome: string, matricula: string, salario: number) {
        super(nome, sobrenome);

        if(salario <= 0) {
            console.log("Funcionário sem salário (R$0.00). Defina o salário posteriormente");
            this._salario = 0;
        } else {
            this._salario = salario;
        }

        this._matricula = matricula;
    }

    set salario(valor: number){
        valor <= 0 ? console.log('Salário inválido!')
        : this._salario = valor;
    }

    get matricula(): string {
        return this._matricula;
    }

    get salario(): number {
        return this._salario;
    }

    calcularSalarioPrimeiraParcela(): number {
        return this.salario * .6;
    }

    calcularSalarioSegundaParcela(): number {
        return this.salario * .4;
    }



}
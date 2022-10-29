
export default class Empregado {
    private _salario: number = 500;

    calcularSalario() : number {
        return this._salario;
    }

    get salario(): number {
        return this._salario;
    }
}
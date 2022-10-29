"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ex_02_1 = __importDefault(require("./ex_02"));
class Funcionario extends ex_02_1.default {
    constructor(nome, sobrenome, matricula, salario) {
        super(nome, sobrenome);
        if (salario <= 0) {
            console.log("Funcionário sem salário (R$0.00). Defina o salário posteriormente");
            this._salario = 0;
        }
        else {
            this._salario = salario;
        }
        this._matricula = matricula;
    }
    set salario(valor) {
        valor <= 0 ? console.log('Salário inválido!')
            : this._salario = valor;
    }
    get matricula() {
        return this._matricula;
    }
    get salario() {
        return this._salario;
    }
    calcularSalarioPrimeiraParcela() {
        return this.salario * .6;
    }
    calcularSalarioSegundaParcela() {
        return this.salario * .4;
    }
}
exports.default = Funcionario;

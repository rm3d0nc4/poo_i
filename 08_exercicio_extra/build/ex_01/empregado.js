"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Empregado {
    constructor() {
        this._salario = 500;
    }
    calcularSalario() {
        return this._salario;
    }
    get salario() {
        return this._salario;
    }
}
exports.default = Empregado;

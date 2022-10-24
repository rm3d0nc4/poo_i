"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ex_02_1 = __importDefault(require("./ex_02"));
class CalculadoraCientifica extends ex_02_1.default {
    constructor(operando1, operando2) {
        super(operando1, operando2);
    }
    exponenciar() {
        return this._operando1 ** this._operando2;
    }
}
let calculadoraCientifica1 = new CalculadoraCientifica(4, 2);
console.log(calculadoraCientifica1.exponenciar());
console.log(calculadoraCientifica1.soma());
/*
    Para fazer com que a operação 'exponenciar' fosse feita, foi necessário o uso
    do modificador 'protected' para que os atributos pudessem ser acessados na
    subclasse. Outra forma fazer isso seria criando getters na super classe */ 

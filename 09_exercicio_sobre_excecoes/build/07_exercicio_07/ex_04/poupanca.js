"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const conta_1 = __importDefault(require("./conta"));
class Poupanca extends conta_1.default {
    constructor(titular, numero, saldo, taxaJuros = 10) {
        super(titular, numero, saldo);
        this._taxaJuros = taxaJuros;
    }
    renderJuros() {
        this.depositar(this.saldo * this._taxaJuros / 100);
    }
    get taxaJuros() {
        return this._taxaJuros;
    }
}
exports.default = Poupanca;

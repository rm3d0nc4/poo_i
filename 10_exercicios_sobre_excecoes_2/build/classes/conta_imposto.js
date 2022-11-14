"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const conta_1 = __importDefault(require("./conta"));
class ContaImposto extends conta_1.default {
    constructor(titular, numero, saldo, taxaDeDesconto) {
        super(titular, numero, saldo);
        this._validarValor(taxaDeDesconto);
        this._taxaDesconto = taxaDeDesconto;
    }
    debitar(valor) {
        try {
            let total = valor + valor * (this._taxaDesconto / 100);
            super.sacar(total);
        }
        catch (error) {
            console.log(error.message);
        }
    }
}
exports.default = ContaImposto;

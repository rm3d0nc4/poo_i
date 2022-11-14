"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ex_10_1 = require("./ex_10");
const ex_11_1 = __importDefault(require("./ex_11"));
class TesteTributaveis {
    constructor() {
        let auditoria = new ex_11_1.default();
        let conta1 = new ex_10_1.ContaCorrente('Romero', 150000);
        let conta2 = new ex_10_1.ContaCorrente('Antonio', 4000000);
        let conta3 = new ex_10_1.ContaCorrente('Ramos', 45000);
        let conta4 = new ex_10_1.ContaCorrente('Mendonça', 2500000);
        let seguro1 = new ex_10_1.SeguroDeVida();
        let seguro2 = new ex_10_1.SeguroDeVida();
        let seguro3 = new ex_10_1.SeguroDeVida();
        let seguro4 = new ex_10_1.SeguroDeVida();
        let seguro5 = new ex_10_1.SeguroDeVida();
        auditoria.adicionar(conta1, conta2, conta3, conta4);
        auditoria.adicionar(seguro1, seguro2, seguro3, seguro4, seguro5);
        console.log(auditoria.calcularTributos());
    }
}
let teste = new TesteTributaveis();

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const conta_atualizada_1 = __importDefault(require("./ex_03/conta_atualizada"));
let conta1 = new conta_atualizada_1.default('Romero', '1', 100);
let conta2 = new conta_atualizada_1.default('Samilla', '2', 100);
console.log(conta1.saldo);
conta1.transferir(conta2, 50);
console.log(conta1.saldo);
conta1.transferir(conta2, 100);
console.log(conta1.saldo);

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const conta_atualizada_1 = __importDefault(require("./conta_atualizada"));
let conta1 = new conta_atualizada_1.default('Romero', '1', 100);
console.log(conta1.saldo);
conta1.sacar(50);
console.log(conta1.saldo);
conta1.sacar(100);
console.log(conta1.saldo);

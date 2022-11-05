"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const banco_1 = __importDefault(require("../07_exercicio_07/ex_04/banco"));
const conta_atualizada_1 = __importDefault(require("./ex_03/conta_atualizada"));
let conta1 = new conta_atualizada_1.default('Romero', '1', 200);
let conta2 = new conta_atualizada_1.default('Samilla', '2', 400);
let banco = new banco_1.default();
banco.inserir(conta1);
banco.inserir(conta2);
banco.transferir('2', '1', 350);
/* Resposta: Sim, pois todos os métodos citados terminam chamando o método
    'transferir' presente na classe Conta, o que faz com que o erro seja disparado */ 

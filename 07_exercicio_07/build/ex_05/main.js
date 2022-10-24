"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const estoque_1 = __importDefault(require("./estoque"));
const produto_1 = __importDefault(require("./produto"));
const produto_perecivel_1 = __importDefault(require("./produto_perecivel"));
let estoque = new estoque_1.default(new produto_perecivel_1.default('5', 'Manteiga', 'manteiga Primor', 2, 5.50, new Date('2022-10-24')));
let sabao = new produto_1.default('1', 'Sabão', 'sabão para lavar roupa', 5, 2.50);
let biscoito = new produto_perecivel_1.default('2', 'Biscoito', 'biscoito de água e sal', 10, 7.50, new Date('2022-12-25'));
let vassoura = new produto_1.default('3', 'Vassoura', 'vassoura de palha', 2, 4.80);
let queijo = new produto_perecivel_1.default('4', 'Queijo', 'queijo coalho', 5, 70, new Date('2022-10-26'));
estoque.inserir(sabao);
estoque.inserir(biscoito);
estoque.inserir(vassoura);
estoque.inserir(queijo);
console.log('===================================================');
estoque.listarProdutos();
console.log('===================================================');
estoque.listarVencidos();
console.log('===================================================');
estoque.darBaixa('1', 4);
estoque.darBaixa('2', 5);
estoque.darBaixa('5', 1);
estoque.repor('3', 4);
estoque.repor('4', 2);
estoque.repor('5', 2);
estoque.listarProdutos();
estoque.excluir('5');
console.log('===================================================');
estoque.listarVencidos();
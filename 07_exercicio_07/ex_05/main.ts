import Estoque from "./estoque";
import Produto from "./produto";
import ProdutoPerecivel from "./produto_perecivel";

let estoque: Estoque = new Estoque(new ProdutoPerecivel('5', 'Manteiga', 'manteiga Primor', 2, 5.50, new Date('2022-10-24')));

let sabao: Produto = new Produto('1', 'Sabão', 'sabão para lavar roupa', 5, 2.50);
let biscoito: ProdutoPerecivel = new ProdutoPerecivel('2', 'Biscoito', 'biscoito de água e sal', 10, 7.50, new Date('2022-12-25'));
let vassoura: Produto = new Produto('3', 'Vassoura', 'vassoura de palha', 2, 4.80);
let queijo: ProdutoPerecivel = new ProdutoPerecivel('4', 'Queijo', 'queijo coalho', 5, 70, new Date('2022-10-26'));

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
import Banco from "../07_exercicio_07/ex_04/banco";
import ContaAtualizada from "./ex_03/conta_atualizada";

let conta1: ContaAtualizada = new ContaAtualizada('Romero', '1', 200);
let conta2: ContaAtualizada = new ContaAtualizada('Samilla', '2', 400);

let banco: Banco = new Banco();
banco.inserir(conta1);
banco.inserir(conta2);

banco.transferir('2', '1', 350);

/* Resposta: Sim, pois todos os métodos citados terminam chamando o método
    'transferir' presente na classe Conta, o que faz com que o erro seja disparado */
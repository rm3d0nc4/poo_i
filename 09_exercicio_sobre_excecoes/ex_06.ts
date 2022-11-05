import Banco from "../07_exercicio_07/ex_04/banco";
import Conta from "../07_exercicio_07/ex_04/conta";
import ContaAtualizada from "./ex_03/conta_atualizada";

export default class ContaAtualizada2 extends ContaAtualizada { // Sacar já implementado em ContaAtualizada
    
    constructor(titular: string, numero: string, saldo: number = 0) {

        if(saldo < 0) {
            throw new Error('Falha ao criar conta: saldo negativo!');
        } else {
            super(titular, numero, saldo);
        }
    }

    depositar(valor: number): void {
        if(valor <= 0) {
            throw new Error('Depósito inválido: valor menor ou igual a 0!');
        } else {
            super.depositar(valor);
        }
    }
}

let conta1: ContaAtualizada2 = new ContaAtualizada2('Romero', '1', 200);
let conta2: ContaAtualizada2 = new ContaAtualizada2('Samilla', '2', 400);

let banco: Banco = new Banco();
banco.inserir(conta1);
banco.inserir(conta2);

// banco.depositar('1', 0); // ERRO
// banco.transferir('2', '1', 350); // ERRO
banco.inserir(new ContaAtualizada2('Ana Maria', '3', -150));
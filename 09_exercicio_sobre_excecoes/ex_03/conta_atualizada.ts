import Conta from "../../07_exercicio_07/ex_04/conta";

export default class ContaAtualizada extends Conta {
    
    constructor(titular: string, numero: string, saldo: number = 0) {
        super(titular, numero, saldo);
    }
    
    sacar(valor: number): boolean {
        if(valor > this.saldo) {
            throw new Error("Saldo insuficiente!");
        } else {
            return super.sacar(valor);
        }
    }
}

/*  Achei interessante criar uma nova classe que extende de Conta
    e sobrescrever o método sacar. Mas eu poderia copiar toda a 
    classe Conta e alterar o método. Seque abaixo o método
    implementado dessa forma:

    ...

    sacar(valor: number): void {
        if(valor > this.saldo) {
            throw new Error("Saldo insuficiente!");
        } else {
            this.sacar(valor);
        }
    }

    ...

*/

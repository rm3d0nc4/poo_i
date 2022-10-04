import Conta from "./conta";

export default class Banco {
    contas: Array<Conta>;

    constructor(contas: Array<Conta> = []) {
        this.contas = contas;
    }

    inserir(conta: Conta): void {
        if(this.consultarIndice(conta.numero) == -1) {
            this.contas.push(conta);
        }
    }


    consultar(numero: String): Conta {
        let contaProcurada!: Conta;
        
        for (let c of this.contas) {
            if (c.numero == numero) {
                contaProcurada = c;
                break;
            }
        }
        return contaProcurada;
    }

    consultarIndice(numero: String): number {
        let indice: number = -1;
            for (let i: number = 0; i < this.contas.length; i++) {
                if (this.contas[i].numero == numero) {
                    indice = i;
                    break;
                }
            }
        return indice;
    }

    alterar(c: Conta): void {
        let indice = this.consultarIndice(c.numero);
        
        if (indice != -1) {
            this.contas[indice] = c;
        }
    }

    excluir(numero: String): void {
        let indice: number = this.consultarIndice(numero);
        
        // if (indice != -1) {
        //     for (let i: number = indice; i < this.contas.length; i++) {
        //         this.contas[i] = this.contas[i + 1];
        //     }
        //     this.contas.pop();
        // }

        this.contas.splice(indice, 1);
    }

    depositar(numero: String, valor: number) {
        let conta: Conta = this.consultar(numero);
        
        if (conta != null) {
            conta.depositar(valor);
        }
    }

    sacar(numero: String, valor: number) {
        let conta: Conta = this.consultar(numero);
        
        if (conta != null) {
            conta.sacar(valor);
        }
    }

    transferir(numeroCredito: string, numeroDebito: string, valor: number): void {
        let contaCredito: Conta = this.consultar(numeroCredito);
        let contaDebito: Conta = this.consultar(numeroDebito);

        contaDebito.transferir(contaCredito, valor);
    } 

    
    quantidadeContas() : number {
        return this.contas.length;
    }

    totalDepositado(): number {
        let total: number = 0;

        if(this.quantidadeContas() != 0){
            let saldos: number[] = this.contas.map((conta) => conta.meuSaldo());
            total = saldos.reduce((previous, current) => previous += current);
        }
        
        return total;
    }

    mediaSaldo(): number {
        let media: number = this.totalDepositado() / this.quantidadeContas();

        return media;
    }
    

}
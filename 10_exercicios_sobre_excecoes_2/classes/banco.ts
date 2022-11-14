import Conta from './conta';
import Poupanca from './conta_poupanca';
import { ContaInexistenteError, ApplicacaoError } from '../errors';


export default class Banco {
    private _contas: Array<Conta>;

    constructor(contas: Array<Conta> = []) {
        this._contas = contas;
    }
    
    private consultarIndice(numero: String): number {
        for (let index: number = 0; index < this._contas.length; index++) {
            if (this._contas[index].numero == numero) {
                return index;
            }
        }

        throw new ContaInexistenteError('Conta não encontrada!')
    }
    
    inserir(conta: Conta): void {
        try {
            this.consultarIndice(conta.numero);
            throw new ApplicacaoError(`Falha. Conta ${conta.numero} já existe!`);
        } catch (error) {
            if(error instanceof ContaInexistenteError) {
                this._contas.push(conta);
            } else {
                console.log((<Error>error).message);
            }
        }
    }

    consultar(numero: String): Conta {        
        // Poderia fazer também fazer um bloco try catch 
        // envolvendo o metodo consultarIndice
        for (let conta of this._contas) {
            if (conta.numero == numero) {
                return conta;
            }
        }
        throw new ContaInexistenteError('Conta não encontrada!');
    }

    alterar(c: Conta): void {
        try {
            let indice = this.consultarIndice(c.numero);
            this._contas[indice] = c;
        } catch (error) {
            console.log((<Error>error).message);
        }
    }

    excluir(numero: String): void {
        try {
            let indice = this.consultarIndice(numero);
            this._contas.splice(indice, 1);
        } catch (error) {
            console.log((<Error>error).message);
        }
    }

    depositar(numero: String, valor: number) {
        try {
            let conta: Conta = this.consultar(numero);
            conta.depositar(valor);
        } catch (error) {
            console.log((<Error>error).message);
        }
    }

    sacar(numero: String, valor: number) {
        try {
            let conta: Conta = this.consultar(numero);
            conta.debitar(valor);
        } catch (error) {
            console.log((<Error>error).message);
        }
    }

    transferir(numeroCredito: string, numeroDebito: string, valor: number): void {
        try {
            let contaCredito: Conta = this.consultar(numeroCredito);
            let contaDebito: Conta = this.consultar(numeroDebito);
    
            contaDebito.transferir(contaCredito, valor);
        } catch (error) {
            console.log((<Error>error).message);
        }
    } 

    
    quantidadeContas() : number {
        return this._contas.length;
    }

    totalDepositado(): number {
        let total: number = 0;

        if(this.quantidadeContas() != 0){
            let saldos: number[] = this._contas.map((conta) => conta.saldo);
            total = saldos.reduce((previous, current) => previous += current);
        }
        
        return total;
    }

    mediaSaldo(): number {
        let media: number = this.totalDepositado() / this.quantidadeContas();

        return media;
    }

    renderJuros(numero: string): void { // number
        try {
            let conta: Conta = this.consultar(numero);
            if(conta instanceof Poupanca) {
                (<Poupanca> conta).renderJuros();
            } else {
                throw new ContaInexistenteError('Conta Poupança não encontrada');
            }
        } catch (error) {
            console.log((<Error>error).message);
        }
    }
}
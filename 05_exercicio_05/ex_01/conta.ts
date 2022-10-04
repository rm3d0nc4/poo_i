export default class Conta {
    titular: string
    numero: String;
    private saldo: number;
    
    constructor(titular: string, numero: string, saldo: number = 0) {
        this.titular = titular;
        this.numero = numero;
        this.saldo = saldo;
    }

    
    meuSaldo() : number {
        return this.saldo;
    }
    
    
    sacar(valor: number): boolean {
        if( this.saldo >= valor) {
            this.saldo = this.saldo - valor;

            return true;
        } else {
            return false;
        }
    }

    transferir(contaDestino: Conta, valor: number): boolean {
        if(this.sacar(valor)) {
            contaDestino.depositar(valor);
            return true;
        } else {
            return false;
        }
    }

    depositar(valor: number): void {
        this.saldo = this.saldo + valor;
    }

    consultarSaldo(): number {
        return this.saldo;
    }
}
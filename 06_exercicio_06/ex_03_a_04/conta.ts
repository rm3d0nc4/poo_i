export default class Conta {
    private _titular: string
    private _numero: String;
    private _saldo: number;
    
    constructor(titular: string, numero: string, saldo: number = 0) {
        this._titular = titular;
        this._numero = numero;
        this._saldo = saldo;
    }
    
    get numero(): String {
        return this._numero;
    }
    
    get saldo() : number {
        return this._saldo;
    }

    get titular(): String {
        return this._titular;
    }
    
    
    sacar(valor: number): boolean {
        if( this._saldo >= valor) {
            this._saldo = this._saldo - valor;

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
        this._saldo = this._saldo + valor;
    }
}
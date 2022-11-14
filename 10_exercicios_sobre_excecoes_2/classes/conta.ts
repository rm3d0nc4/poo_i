import { SaldoInsuficienteError, ValorInvalidoError } from "../errors";

export default class Conta {
    private _titular: string
    private _numero: String;
    private _saldo: number = 0;
    
    constructor(titular: string, numero: string, saldoInicial: number) {
        this._titular = titular;
        this._numero = numero;

        try {
            this.depositar(saldoInicial);
        } catch (error) {
            this._saldo = 0;
        }
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
    
    sacar(valor: number): void {
        this._validarValor(valor);
        if(valor > this.saldo) {
            throw new SaldoInsuficienteError('Saldo insuficiente');
        } else {
            this._saldo = this._saldo - valor;
        }
    }

    debitar(valor: number): void {
        this.sacar(valor);
    }

    transferir(contaDestino: Conta, valor: number): void {
        this.sacar(valor);
        contaDestino.depositar(valor);
    }

    depositar(valor: number): void {
        this._validarValor(valor);
        this._saldo = this._saldo + valor;
    }
    

    protected _validarValor(valor: number): void {
        if(valor <= 0) {
            throw new ValorInvalidoError('Valor inválido');
        }
    }
}
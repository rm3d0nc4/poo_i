import Conta from "./conta";

export default class Poupanca extends Conta {
    private _taxaJuros: number;


    constructor(titular: string, numero: string, saldoInicial: number, taxaJuros: number = 10) {
        super(titular, numero, saldoInicial);
        this._validarValor(taxaJuros);
        this._taxaJuros = taxaJuros;
    }
    
    public renderJuros(): void {
        this.depositar(this.saldo * this._taxaJuros/100);
    }
    
    get taxaJuros(): number {
        return this._taxaJuros
    }
}
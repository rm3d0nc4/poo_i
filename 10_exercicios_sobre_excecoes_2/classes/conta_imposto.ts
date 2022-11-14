import Conta from "./conta";

export default class ContaImposto extends Conta {
    private _taxaDesconto: number;

    constructor(titular: string, numero: string, saldo: number, taxaDeDesconto: number) {
        super(titular, numero, saldo);
        this._validarValor(taxaDeDesconto);
        this._taxaDesconto = taxaDeDesconto;
    }

    debitar(valor: number): void {
        try {
            let total = valor + valor * (this._taxaDesconto/100);
            super.sacar(total);
        } catch (error) {
            console.log((<Error>error).message);
        }
    }
}
import Conta from "./conta";

export default class ContaImposto extends Conta {
    private _taxaDesconto: number;

    constructor(titular: string, numero: string, saldo: number, taxaDeDesconto: number) {
        super(titular, numero, saldo);
        this._taxaDesconto = taxaDeDesconto;
    }

    debitar(valor: number): boolean {
        let total = valor + valor * (this._taxaDesconto/100);
        return super.sacar(total);
    }
}
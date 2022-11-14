import {Tributavel} from "./ex_10";

export default class AuditoriaInterna {
    private _tributaveis: Array<Tributavel> = [];

    adicionar(...tributaveis: Tributavel[]): void {
        for(let tributavel of tributaveis) {
            this._tributaveis.push(tributavel);
        }
    }

    calcularTributos(): number {
        let tributos: Array<number> = this._tributaveis.map((tributavel) => tributavel.calculaTributos());
        return tributos.reduce((total, atual) => total + atual);
    }
}
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class AuditoriaInterna {
    constructor() {
        this._tributaveis = [];
    }
    adicionar(...tributaveis) {
        for (let tributavel of tributaveis) {
            this._tributaveis.push(tributavel);
        }
    }
    calcularTributos() {
        let tributos = this._tributaveis.map((tributavel) => tributavel.calculaTributos());
        return tributos.reduce((total, atual) => total + atual);
    }
}
exports.default = AuditoriaInterna;

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const produto_1 = __importDefault(require("./produto"));
class ProdutoPerecivel extends produto_1.default {
    constructor(id, nome, descricao, qtdEstoque, valorUnitario, validade) {
        super(id, nome, descricao, qtdEstoque, valorUnitario);
        this._dataDeValidade = validade;
    }
    ehValido() {
        return this._dataDeValidade.getTime() > Date.now();
    }
    repor(quantidade) {
        if (this.ehValido()) {
            super.repor(quantidade);
        }
    }
    darBaixa(quantidade) {
        if (this.ehValido()) {
            super.darBaixa(quantidade);
        }
    }
    toString() {
        const strOut = `Id: ${this.id},`
            + ` nome: ${this.nome},`
            + ` descrição: ${this.descricao},`
            + ` estoque: ${this.qtdEstoque},`
            + ` valor unitário: ${this.valorUnitario},`
            + ` validade: ${this._dataDeValidade}`;
        console.log(strOut);
    }
}
exports.default = ProdutoPerecivel;

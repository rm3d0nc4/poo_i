"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Produto {
    constructor(id, nome, descricao, qtdEstoque, valorUnitario) {
        this._id = id;
        this._nome = nome;
        this._descricao = descricao;
        this._qtdEstoque = qtdEstoque;
        this._valorUnitario = valorUnitario;
    }
    get id() {
        return this._id;
    }
    get nome() {
        return this._nome;
    }
    get descricao() {
        return this._descricao;
    }
    get valorUnitario() {
        return this._valorUnitario;
    }
    get qtdEstoque() {
        return this._qtdEstoque;
    }
    repor(quantidade) {
        this._qtdEstoque += quantidade;
    }
    darBaixa(quantidade) {
        if (this._qtdEstoque < 0) {
            this._qtdEstoque -= quantidade;
        }
    }
    toString() {
        console.log(`Id: ${this._id}, nome: ${this._nome} descrição: ${this._descricao}, estoque: ${this._qtdEstoque}, valor unitário: ${this._valorUnitario}`);
    }
}
exports.default = Produto;

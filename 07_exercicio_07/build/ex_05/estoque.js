"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const produto_perecivel_1 = __importDefault(require("./produto_perecivel"));
class Estoque {
    constructor(...produtos) {
        this._produtos = [];
        this._produtos = produtos;
    }
    get produtos() {
        return this._produtos;
    }
    inserir(produto) {
        if (this.consultarPorId(produto.id) == -1 && this.consultarPorNome(produto.nome) == -1) {
            this._produtos.push(produto);
        }
    }
    consultarPorId(id) {
        let posicao = this.produtos.findIndex((produto) => produto.id == id);
        return posicao;
    }
    consultarPorNome(nome) {
        let posicao = this.produtos.findIndex((produto) => produto.nome == nome);
        return posicao;
    }
    excluir(id) {
        let posicao = this.consultarPorId(id);
        if (posicao != -1) {
            this._produtos.splice(posicao, 1);
        }
    }
    repor(id, quantidade) {
        let posicao = this.consultarPorId(id);
        if (posicao != -1) {
            this._produtos.at(posicao).repor(quantidade);
        }
    }
    darBaixa(id, quantidade) {
        let posicao = this.consultarPorId(id);
        if (posicao != -1) {
            this._produtos.at(posicao).darBaixa(quantidade);
        }
    }
    listarVencidos() {
        let vencidos = [];
        this._produtos.forEach((produto) => {
            if (produto instanceof produto_perecivel_1.default) {
                if (!produto.ehValido()) {
                    produto.toString();
                    vencidos.push(produto);
                }
            }
        });
        return vencidos;
    }
    listarProdutos() {
        this._produtos.forEach((produto) => produto.toString());
    }
}
exports.default = Estoque;

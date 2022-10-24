export default class Produto {
    private _id: string;
    private _nome: string;
    private _descricao: string;
    private _qtdEstoque: number;
    private _valorUnitario: number;

    constructor(id: string, nome: string, descricao: string, qtdEstoque: number, valorUnitario: number) {
        this._id = id;
        this._nome = nome;
        this._descricao = descricao;
        this._qtdEstoque = qtdEstoque;
        this._valorUnitario = valorUnitario;
    }

    get id(): string {
        return this._id;
    }
    
    get nome(): string {
        return this._nome;
    }
    
    get descricao(): string {
        return this._descricao;
    }
    
    get valorUnitario(): number {
        return this._valorUnitario;
    }

    get qtdEstoque(): number {
        return this._qtdEstoque;
    }

    repor(quantidade: number): void {
        this._qtdEstoque += quantidade;
    }

    darBaixa(quantidade: number) {
        if(this._qtdEstoque < 0) {
            this._qtdEstoque -= quantidade;
        }
    }

    toString() {
        console.log(`Id: ${this._id}, nome: ${this._nome} descrição: ${this._descricao}, estoque: ${this._qtdEstoque}, valor unitário: ${this._valorUnitario}`);
    }
}
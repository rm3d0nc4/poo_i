import Produto from "./produto";

export default class ProdutoPerecivel extends Produto {
    private _dataDeValidade: Date;

    constructor(id: string, nome: string, descricao: string, qtdEstoque: number, valorUnitario: number, validade: Date) {
        super(id, nome, descricao, qtdEstoque, valorUnitario);
        this._dataDeValidade = validade;
    }

    ehValido(): boolean {
        return this._dataDeValidade.getTime() > Date.now();
    }

    repor(quantidade: number): void {
        if(this.ehValido()) {
            super.repor(quantidade);
        }
    }

    darBaixa(quantidade: number) {
        if(this.ehValido()) {
            super.darBaixa(quantidade);
        }
    }

    toString() {
        const strOut: string = `Id: ${this.id},`
            +` nome: ${this.nome},`
            +` descrição: ${this.descricao},`
            +` estoque: ${this.qtdEstoque},`
            +` valor unitário: ${this.valorUnitario},`
            +` validade: ${this._dataDeValidade}`
        
            console.log(strOut);
    }
}
import Produto from "./produto";
import ProdutoPerecivel from "./produto_perecivel";

export default class Estoque {

    private _produtos: Array<Produto> = [];
    
    constructor(...produtos: Produto[]) {
        this._produtos = produtos;
    }

    get produtos(): Array<Produto> {
        return this._produtos;
    }

    inserir(produto: Produto): void {

        if(this.consultarPorId(produto.id) == -1 && this.consultarPorNome(produto.nome) == -1) {
            this._produtos.push(produto);
        }
    }

    consultarPorId(id: string) {
        let posicao: number = this.produtos.findIndex((produto) => produto.id == id);
        return posicao;
    }

    consultarPorNome(nome: string) {
        let posicao: number = this.produtos.findIndex((produto) => produto.nome == nome);
        return posicao;
    }

    excluir(id: string): void {
        let posicao: number = this.consultarPorId(id);

        if(posicao != -1) {
            this._produtos.splice(posicao, 1);
        }
    }

    repor(id:string, quantidade: number): void {
        let posicao: number = this.consultarPorId(id);

        if(posicao != -1) {
            this._produtos.at(posicao).repor(quantidade);
        }
    }

    darBaixa(id:string, quantidade: number): void {
        let posicao: number = this.consultarPorId(id);

        if(posicao != -1) {
            this._produtos.at(posicao).darBaixa(quantidade);
        }
    }

    listarVencidos(): Array<Produto> {
        let vencidos: Array<Produto> = [];

        this._produtos.forEach((produto) => {
            if(produto instanceof ProdutoPerecivel) {
                if(!(<ProdutoPerecivel> produto).ehValido()) {
                    produto.toString();
                    vencidos.push(produto);
                }
            }
        });
        
        
        return vencidos;
    }
    
    listarProdutos(): void {
        this._produtos.forEach((produto) => produto.toString());
        
    }
}
class Postagem {
    id: number;
    texto: string;
    qtdCurtidas: number;
    
    constructor(id: number, texto: string) {
        this.id = id;
        this.texto = texto;
        this.qtdCurtidas = 0;
    }

    curtir(): void {
        this.qtdCurtidas++;
    }

    toString(): string {
        return `Id: ${this.id}, curtidas: ${this.qtdCurtidas}, texto:  ${this.texto}\n`;
    }
} 



class MicroBlog {
    postagens: Array<Postagem>;

    constructor() {
        this.postagens = new Array<Postagem>;
    }

    addPostagem(...postagens: Array<Postagem>): void {
        this.postagens.push(...postagens);
    }

    excluirPostagem(idPostagem: number) {
        // let postIndex: number = this.postagens.findIndex((post) => post.id == idPostagem);

        // if(postIndex != -1) {
        //     this.postagens.splice(postIndex, 1);
        // }   

        for(let index = 0; index < this.postagens.length; index++) {
            if (this.postagens[index].id == idPostagem) {
                this.postagens.splice(index, 1);
            }
        }
    }

    postMaisCurtido(): Array<Postagem> {
        let post: Postagem = this.postagens.reduce((previousPost, currentPost,) => 
            currentPost.qtdCurtidas > previousPost.qtdCurtidas ? 
            previousPost = currentPost : 
            previousPost = previousPost
        );

        return [post];
    }

    curtir(idPostagem: number): void {
        // let postIndex: number = this.postagens.findIndex((post) => post.id == postId);
        
        // if(postIndex != -1) {
        //     this.postagens[postIndex].curtir();
        // }

        for(let index in this.postagens) {
            if (this.postagens[index].id == idPostagem) {
                this.postagens[index].curtir();
            }
        }
    }

    toString(): string {
        let str: string =  '';
        
        this.postagens.forEach((postagem) => str += postagem.toString());


        return str;
    }


}

let m1: MicroBlog = new MicroBlog();
let p1: Postagem = new Postagem(1, "Como fazer cachorro-quente em dois minutos");
let p2: Postagem = new Postagem(2, "Miojo suculento em 3 minutos");

p1.curtir();
p2.curtir();
p1.curtir();
p2.curtir();
p1.curtir();

m1.addPostagem(p1, p2);
m1.addPostagem(new Postagem(3, 'Salame na salada'));

m1.curtir(3);
m1.curtir(3);
m1.curtir(1);
m1.curtir(2);

console.log(m1.postMaisCurtido());
console.log(m1.toString());

m1.excluirPostagem(1);

console.log(m1.postMaisCurtido());
console.log(m1.toString());
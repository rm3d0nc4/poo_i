"use strict";
class Postagem {
    constructor(id, texto) {
        this.id = id;
        this.texto = texto;
        this.qtdCurtidas = 0;
    }
    curtir() {
        this.qtdCurtidas++;
    }
    toString() {
        return `Id: ${this.id}, curtidas: ${this.qtdCurtidas}, texto:  ${this.texto}\n`;
    }
}
class MicroBlog {
    constructor() {
        this.postagens = new Array;
    }
    addPostagem(...postagens) {
        this.postagens.push(...postagens);
    }
    excluirPostagem(idPostagem) {
        // let postIndex: number = this.postagens.findIndex((post) => post.id == idPostagem);
        // if(postIndex != -1) {
        //     this.postagens.splice(postIndex, 1);
        // }   
        for (let index = 0; index < this.postagens.length; index++) {
            if (this.postagens[index].id == idPostagem) {
                this.postagens.splice(index, 1);
            }
        }
    }
    postMaisCurtido() {
        let post = this.postagens.reduce((previousPost, currentPost) => currentPost.qtdCurtidas > previousPost.qtdCurtidas ?
            previousPost = currentPost :
            previousPost = previousPost);
        return [post];
    }
    curtir(idPostagem) {
        // let postIndex: number = this.postagens.findIndex((post) => post.id == postId);
        // if(postIndex != -1) {
        //     this.postagens[postIndex].curtir();
        // }
        for (let index in this.postagens) {
            if (this.postagens[index].id == idPostagem) {
                this.postagens[index].curtir();
            }
        }
    }
    toString() {
        let str = '';
        this.postagens.forEach((postagem) => str += postagem.toString());
        return str;
    }
}
let m1 = new MicroBlog();
let p1 = new Postagem(1, "Como fazer cachorro-quente em dois minutos");
let p2 = new Postagem(2, "Miojo suculento em 3 minutos");
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

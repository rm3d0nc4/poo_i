"use strict";
class Jogador {
    constructor(forca, nivel, pontosAtuais) {
        this.forca = forca;
        this.nivel = nivel;
        this.pontosAtuais = pontosAtuais;
    }
    calcularAtaque() {
        return this.forca * this.nivel;
    }
    atacar(jogadorAtacado) {
        if (jogadorAtacado.estaVivo()) {
            jogadorAtacado.pontosAtuais -= this.calcularAtaque();
        }
    }
    estaVivo() {
        return this.pontosAtuais > 0;
    }
    toString() {
        return `Jogador -> força: ${this.forca}, nivel: ${this.nivel}, pontos Atuais: ${this.pontosAtuais}`;
    }
}
let j1 = new Jogador(4, 2, 100);
let j2 = new Jogador(3, 2, 90);
console.log(j1.calcularAtaque());
console.log(j2.calcularAtaque());
j2.atacar(j1);
j1.atacar(j2);
j2.atacar(j1);
j2.atacar(j1);
j2.atacar(j1);
j2.atacar(j1);
console.log(j1.toString());
console.log(j2.toString());

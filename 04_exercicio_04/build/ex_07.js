"use strict";
class Equipamento {
    constructor(ligado = false) {
        this.ligado = ligado;
    }
    liga() {
        this.ligado = true;
    }
    desliga() {
        this.ligado = false;
    }
    inverte() {
        this.ligado = !this.ligado;
    }
    estaLigado() {
        return this.ligado;
    }
}
let e1 = new Equipamento();
console.log(e1.estaLigado());
e1.liga();
console.log(e1.estaLigado());
e1.desliga();
console.log(e1.estaLigado());
e1.inverte();
console.log(e1.estaLigado());

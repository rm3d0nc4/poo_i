"use strict";
/*
Respota:
    Ocorrerá um erro devido ao método construtor da classe não ter recebido
    nenhum argumento; */
// Solução:
class Radio {
    constructor(volume = 0) {
        this.volume = volume;
    }
}
let r = new Radio();
r.volume = 10;
console.log(r.volume);

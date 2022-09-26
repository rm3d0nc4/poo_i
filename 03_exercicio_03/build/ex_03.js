"use strict";
function saudacao(nome, pronome = 'Sr.') {
    let saudacao = pronome + nome;
    return saudacao;
}
const nome = "Romero";
const pronome = "Sr.";
const saudacao1 = saudacao(nome, pronome);
console.log(saudacao1);

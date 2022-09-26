function saudacao(nome: string, pronome: string = 'Sr.' ): string {
    let saudacao : string = pronome + nome;

    return saudacao;
}

const nome: string = "Romero";
const pronome: string = "Sr.";

const saudacao1: string = saudacao(nome, pronome);
console.log(saudacao1);
// 9. Crie uma classe chamada SituacaoFinanceira com os atributos 
// valorCreditos e valorDebitos. Crie um método chamado saldo() que 
// retorna/calcula a diferença entre crédito e débito. Instancie uma 
// classe SituacaoFinanceira, inicialize os dois atributos e exiba o 
// resultado do método saldo().


class SituacaoFinanceira {
    valorCreditos: number = 0;
    valorDebitos: number = 0;

    constructor(valorCreditos: number, valorDebitos: number) {
        this.valorCreditos = valorCreditos;
        this.valorDebitos = valorDebitos;
    }

    saldo() {
        return this.valorCreditos - this.valorDebitos;
    }
}

function main09() {
    let situacaoJoao = new SituacaoFinanceira(550,340);

    console.log(situacaoJoao.saldo());
}

main09();
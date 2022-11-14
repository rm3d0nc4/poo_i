export class ApplicacaoError extends Error {
    constructor(message: string = 'Erro desconhecido') {
        super(message);
    }
}

export class PoupancaInvalidaError extends Error {
    constructor(message: string = 'Poupanca Inválida!') {
        super(message);
    }
}

export class ValorInvalidoError extends Error {
    constructor(message: string = 'Valor inválido!') {
        super(message);
    }
}

export class ContaInexistenteError extends ApplicacaoError {
    constructor(message: string) {
        super(message);
    }
}

export class SaldoInsuficienteError extends ApplicacaoError {
    constructor(message: string) {
        super(message);
    }
}
export class InputError extends ApplicacaoError {
    constructor(message: string) {
        super(message);
    }
}


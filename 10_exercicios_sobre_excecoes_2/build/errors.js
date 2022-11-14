"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InputError = exports.SaldoInsuficienteError = exports.ContaInexistenteError = exports.ValorInvalidoError = exports.PoupancaInvalidaError = exports.ApplicacaoError = void 0;
class ApplicacaoError extends Error {
    constructor(message = 'Erro desconhecido') {
        super(message);
    }
}
exports.ApplicacaoError = ApplicacaoError;
class PoupancaInvalidaError extends Error {
    constructor(message = 'Poupanca Inválida!') {
        super(message);
    }
}
exports.PoupancaInvalidaError = PoupancaInvalidaError;
class ValorInvalidoError extends Error {
    constructor(message = 'Valor inválido!') {
        super(message);
    }
}
exports.ValorInvalidoError = ValorInvalidoError;
class ContaInexistenteError extends ApplicacaoError {
    constructor(message) {
        super(message);
    }
}
exports.ContaInexistenteError = ContaInexistenteError;
class SaldoInsuficienteError extends ApplicacaoError {
    constructor(message) {
        super(message);
    }
}
exports.SaldoInsuficienteError = SaldoInsuficienteError;
class InputError extends ApplicacaoError {
    constructor(message) {
        super(message);
    }
}
exports.InputError = InputError;

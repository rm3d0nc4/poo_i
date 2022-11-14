"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const functions_1 = require("./functions");
const utils_1 = require("./utils");
const opcoes = "==================Bem-vindo==================\n" +
    "Digite uma opção:\n" +
    "1 - Cadastrar    2 - Consultar   3 - Sacar\n" +
    "4 - Depositar    5 - Excluir     6 - Transferir\n" +
    "7 - Totalizações   8 - Render Juros    9 - Ler Arquivo\n" +
    "0 - Sair\n";
let opcao;
let operacaoAtual;
do {
    try {
        (0, utils_1.print)(opcoes);
        let opcao = (0, utils_1.lerValorInteiro)('Selecione a Opção: ');
        if (opcao == 0)
            break;
        (0, functions_1.ehNumeroValido)(opcao);
        operacaoAtual = functions_1.operacoes[opcao - 1];
        operacaoAtual();
    }
    catch (error) {
        (0, utils_1.print)(error.message);
    }
    (0, utils_1.input)("Operação finalizada.\n>Digite <enter>");
    console.clear();
} while (true);
(0, utils_1.print)("Saindo...");
// "./../../ex_04/contas.txt"

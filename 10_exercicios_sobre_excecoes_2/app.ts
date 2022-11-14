import { ehNumeroValido, operacoes } from './functions';
import { input, lerValorInteiro, print } from './utils';

const opcoes: string =
    "==================Bem-vindo==================\n" +
    "Digite uma opção:\n" +
    "1 - Cadastrar    2 - Consultar   3 - Sacar\n" +
    "4 - Depositar    5 - Excluir     6 - Transferir\n" +
    "7 - Totalizações   8 - Render Juros    9 - Ler Arquivo\n" +
    "0 - Sair\n";
    

let opcao: number;
let operacaoAtual: Function;

do {
    try {
        print(opcoes);
        let opcao: number = lerValorInteiro('Selecione a Opção: ');
        if(opcao == 0) break;
        ehNumeroValido(opcao);
        operacaoAtual = operacoes[opcao-1];
        operacaoAtual();
    } catch (error) {
        print((<Error>error).message);
    }
    
    input("Operação finalizada.\n>Digite <enter>");
    console.clear();
} while (true);
print("Saindo...");

// "./../../ex_04/contas.txt"
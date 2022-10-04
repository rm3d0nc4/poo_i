const input = require('prompt-sync')();
const print = (message: string) => console.log(message);
import Banco from "../ex_01/banco";
import Conta from "../ex_01/conta";


const ehNumeroValido = (numero: number) => [1,2,3,4,5,6,7,0].indexOf(numero) != -1;

function cadastrar(): void {
    print("\nCadastrar conta\n");
    let numero: string = input('Digite o número da conta: ');
    let titular: string = input('Digite o seu nome: ');
        
        let conta: Conta;
        conta = new Conta(titular, numero);
        banco.inserir(conta);
    }
function consultar(): void {
    print("\nConsultar conta\n");
    let numero: string = input('Digite o número da conta: ');
    let conta: Conta = banco.consultar(numero);

    if(conta != undefined) {
        print(`\nTitular: ${conta.titular}, numero: ${conta.numero}\n`);
    } else {
        print(`\nConta não encontrada!\n`);
        
    }
}
function sacar():void  {
    print("\nSaque\n");
    
    let numero: string = input('Digite o número da conta: ');
    let valor: number = Number(input(`Valor: `));
    banco.sacar(numero,valor);
}
function depositar(): void {
    print("\nDepósito\n");
    let numero: string = input('Digite o número da conta: ');
    let valor: number = Number(input(`Valor: `));
    banco.depositar(numero,valor);
}
function transferir(): void {
    print("\nTransferência\n");
    let numeroCredito: string = input('Digite o número da conta a ser creditada: ');
    let numeroDebito: string = input('Digite o número da conta a ser debitada: ');
    let valor: number = input(`Valor: `);
    banco.transferir(numeroCredito, numeroDebito, valor);
}
function excluir(): void {
    print("\nExcluir conta\n");
    let numero: string = input('Digite o número da conta: ');
    
    let exclusao: string = input('Confirmar (S/N): ');
    
    if( exclusao.toLocaleUpperCase() == 'S') {
        banco.excluir(numero);
        print("conta excluída")
    } else if(exclusao.toLocaleUpperCase() == 'N') {
        print("conta mantida")
    }
}
function totalizacoes(): void {
    print("\nTotalizações do banco\n");
    let qtdContas: number = banco.quantidadeContas();
    let totalDepositado: number = banco.totalDepositado();
    let mediaSaldo: number = banco.mediaSaldo();
    
    print(`Quantidade de contas: ${qtdContas} `)
    print(`Total depositdado: ${totalDepositado} `)
    print(`Média de saldo por conta: ${mediaSaldo} \n`)
}

const operacoes: Array<Function> = new Array(
    cadastrar, 
    consultar, 
    sacar, 
    depositar, 
    excluir, 
    transferir, 
    totalizacoes,
    )
    
let opcao: number = -1;
let operacaoAtual: Function;
    
const banco: Banco = new Banco();
    
const opcoes: string =
    "==================Bem-vindo==================\n" +
    "Digite uma opção:\n" +
    "1 - Cadastrar    2 - Consultar   3 - Sacar\n" +
    "4 - Depositar    5 - Excluir     6 - Transferir\n" +
    "7 - Totalizações\n" +
    "0 - Sair\n";
    
while (true) {
    print(opcoes);
    opcao = Number(input('Opção: '));
    
    if(ehNumeroValido(opcao)) {

        if(opcao != 0) {
            operacaoAtual = operacoes[opcao-1];
            operacaoAtual();
        } else { print("Saindo..."); break;}
        
    } else {
        print("Opção inválida!")
    } 

    input("Operação finalizada. Digite <enter>");

    console.clear();
}
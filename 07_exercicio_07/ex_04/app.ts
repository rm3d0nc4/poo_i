import Banco from "./banco";
import Conta from "./conta";
import ContaImposto from "./conta_imposto";
import Poupanca from "./poupanca";
import * as fs from "fs";


const input = require('prompt-sync')();
const print = (message: string) => console.log(message);


const ehNumeroValido = (numero: number) => [1,2,3,4,5,6,7, 8,9,0].indexOf(numero) != -1;

function getTipoConta() {

    let tipo:string = '-1';
    
    while (!('PC'.includes(tipo.toUpperCase()))) {
        
        print("\nSelecionar tipo de conta\n");
        print('>Conta Convencial - C \n >Conta Poupança - P \n >Conta Imposto');
        tipo = input('Tipo de conta (P/C/I): ').toUpperCase();

        if(!('PCI'.includes(tipo.toUpperCase()))) {
            print('Opção Inválida!\n');
        }
    }

    return tipo;
}

function cadastrar(): void {
    print("\nCadastrar conta\n");
    let numero: string = input('Digite o número da conta: ');
    let titular: string = input('Digite o seu nome: ');
    let tipoConta: string = getTipoConta();
    let conta: Conta = criarConta(numero, titular, tipoConta);        
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
    print(`Média de saldo por conta: ${mediaSaldo.toFixed(2)} \n`)
}

function renderJuros(): void  {
    print("\nRender Juros\n");
    let numero: string = input('Digite o número da conta: ');
    banco.renderJuros(numero);
}

function criarConta(numero: string, titular: string, tipoConta: string): Conta {
    let conta: Conta;
    switch (tipoConta) {
        case 'P':
            let taxaJuros: number = Number(input('Digite a taxa juros: '));
            conta = new Poupanca(titular, numero,0, taxaJuros);
            break;
        case 'I':
            let taxaDeDesconto: number = Number(input('Digite a taxa de desconto: '));
            conta = new ContaImposto(titular, numero, 0, taxaDeDesconto);
            break;
        case 'C':
            conta = new Conta(titular, numero);
            break;
        default:
            break;
    }

    return conta!;
}

function lerArquivo(): void {
    let caminho: string = input('Caminho do arquivo: ');
    let contas: Array<String> = fs.readFileSync(caminho).toString().split('\n');
    for(let conta of contas) {
        let objConta: Conta;
        let dadosConta = conta.split('; ');
        let [tipo, nome, numeroConta, saldo, taxa]: string[] = dadosConta;

        if (tipo == 'P') {
            objConta = new Poupanca(nome, numeroConta, Number(saldo), Number(taxa));
        } else if(tipo == 'I') {
            objConta = new ContaImposto(nome, numeroConta, Number(saldo), Number(taxa));
        } else {
            objConta = new Conta(nome, numeroConta, Number(saldo));
        }

        banco.inserir(objConta);
    }
}



const operacoes: Array<Function> = new Array(
    cadastrar, 
    consultar, 
    sacar, 
    depositar, 
    excluir, 
    transferir, 
    totalizacoes,
    renderJuros,
    lerArquivo
    )

let opcao: number = -1;
let operacaoAtual: Function;

const banco: Banco = new Banco();

const opcoes: string =
    "==================Bem-vindo==================\n" +
    "Digite uma opção:\n" +
    "1 - Cadastrar    2 - Consultar   3 - Sacar\n" +
    "4 - Depositar    5 - Excluir     6 - Transferir\n" +
    "7 - Totalizações   8 - Render Juros    9 - Ler Arquivo\n" +
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

    input("Operação finalizada.\n>Digite <enter>");

    console.clear();
}

// "./../../ex_04/contas.txt"
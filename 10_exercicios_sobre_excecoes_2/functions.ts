import Banco from './classes/banco';
import Conta from './classes/conta';
import ContaImposto from './classes/conta_imposto';
import Poupanca from './classes/conta_poupanca';
import * as fs from "fs";
import { InputError } from './errors';
import { getTipoConta, input, lerNumeroConta, lerTexto, lerValorInteiro, print } from './utils';


const banco: Banco = new Banco();

export function ehNumeroValido(numero: number): void {
    if([1,2,3,4,5,6,7, 8,9].indexOf(numero) == -1) {
        throw new InputError('Opção inválida!');
    }
}

function validarValorExclusao(valor: string): void {
        if( valor != 'S' && valor != 'N') {
            throw new InputError(" O valor de entrada deve ser 'S' (sim) ou 'N' (não)!");
        }
}

function cadastrar(): void {
    print("\nCadastrar conta\n");
    try {
        let numero: string = lerNumeroConta();
        let titular: string = input('Digite o seu nome: ');
        let tipoConta: string = getTipoConta();
        let valorInicial = lerValorInteiro('Digite o saldo inicial: ')
        let conta: Conta = criarConta(numero, titular, tipoConta, valorInicial);        
        banco.inserir(conta);
    } catch (error) {
        print((<Error>error).message);
    }
}

function consultar(): void {
    print("\nConsultar conta\n");
    try {
        let numero: string = lerNumeroConta();
        let conta: Conta = banco.consultar(numero);
        print(`\nTitular: ${conta.titular}, numero: ${conta.numero}, saldo: ${conta.saldo}\n`);
    } catch (error) {
        print((<Error>error).message);
    }
}

function sacar():void  {
    print("\nSaque\n");
    try {
        let numero: string = lerNumeroConta();
        let valor: number = lerValorInteiro();
        banco.sacar(numero,valor);
    } catch (error) {
        print((<Error>error).message);
    }
}

function depositar(): void {
    print("\nDepósito\n");
    try {
        let numero: string = lerNumeroConta();
        let valor: number = lerValorInteiro();
        banco.depositar(numero,valor);
    } catch (error) {
        print((<Error>error).message);
    }
}

function transferir(): void {
    print("\nTransferência\n");
    try {
        let numeroCredito: string = lerNumeroConta('Digite o número da conta a ser creditada: ');
        let numeroDebito: string = lerNumeroConta('Digite o número da conta a ser debitada: ');
        let valor: number = lerValorInteiro();
        banco.transferir(numeroCredito, numeroDebito, valor);
    } catch (error) {
        print((<Error>error).message);
    }
}

function excluir(): void {
    print("\nExcluir conta\n");
    try {
        let numero: string = lerNumeroConta();    
        let exclusao: string = input('Confirmar (S/N): ').toUpperCase();
        validarValorExclusao(exclusao);
        if(exclusao == 'S') banco.excluir(numero);
    } catch (error) {
        print((<Error>error).message);
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
    try {
        let numero: string = lerNumeroConta();    
        banco.renderJuros(numero);
    } catch (error) {
        print((<Error>error).message);
    }
}

function criarConta(numero: string, titular: string, tipoConta: string, valorInicial: number): Conta {
        let conta: Conta;
        switch (tipoConta) {
            case 'P':
                let taxaJuros: number = lerValorInteiro('Digite a taxa juros: ');
                conta = new Poupanca(titular, numero, valorInicial, taxaJuros);
                break;
            case 'I':
                let taxaDeDesconto: number = lerValorInteiro('Digite a taxa de desconto: ');
                conta = new ContaImposto(titular, numero, valorInicial, taxaDeDesconto);
                break;
            case 'C':
                conta = new Conta(titular, numero, valorInicial);
                break;
            default:
                break;
        }
        return conta!;
}

function lerArquivo(): void {
    try {
        let caminho: string = lerTexto('Caminho do arquivo: ');
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
    } catch (error) {
        console.log((<Error>error).message);
    }
}

export const operacoes: Array<Function> = new Array(
    cadastrar, 
    consultar, 
    sacar, 
    depositar, 
    excluir, 
    transferir, 
    totalizacoes,
    renderJuros,
    lerArquivo,
    );
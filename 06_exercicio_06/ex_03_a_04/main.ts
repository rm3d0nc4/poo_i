import Banco from "./banco";
import Conta from "./conta";


let conta1: Conta = new Conta('Ana', '1', 1200);
let conta2: Conta = new Conta('Jose', '2', 3450);
let conta3: Conta = new Conta('Maria', '3', 5809);

let banco1: Banco = new Banco();
banco1.inserir(conta1);
banco1.inserir(conta2);
banco1.inserir(conta3);

banco1.transferir('2', '3', 500);
banco1.sacar('1', 100);
banco1.consultar('2');
banco1.depositar('1', 4000);


console.log(conta1.numero);
console.log(conta1.titular);
console.log(conta1.saldo);
console.log(conta1.sacar(100));
console.log(conta1.transferir(conta3, 100));


console.log(banco1.mediaSaldo());
console.log(banco1.totalDepositado());
console.log(banco1.quantidadeContas());

import ContaAtualizada from "./ex_03/conta_atualizada";

let conta1: ContaAtualizada = new ContaAtualizada('Romero', '1', 100);
let conta2: ContaAtualizada = new ContaAtualizada('Samilla', '2', 100);

console.log(conta1.saldo);
conta1.transferir(conta2, 50);
console.log(conta1.saldo);
conta1.transferir(conta2, 100);
console.log(conta1.saldo);
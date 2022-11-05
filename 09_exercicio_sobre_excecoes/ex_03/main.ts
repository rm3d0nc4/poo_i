import ContaAtualizada from "./conta_atualizada";

let conta1: ContaAtualizada = new ContaAtualizada('Romero', '1', 100);
console.log(conta1.saldo);
conta1.sacar(50);
console.log(conta1.saldo);
conta1.sacar(100);
console.log(conta1.saldo);
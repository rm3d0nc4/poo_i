import Diarista from "./ex_01/diarista";
import Empregado from "./ex_01/empregado";
import Horista from "./ex_01/horista";
import Pessoa from "./ex_02";
import Funcionario from "./ex_03";
import Professor from "./ex_04";

const print = console.log;


print('============Empregado============');

let empregado1: Empregado = new Empregado();
print(empregado1.calcularSalario());

print('===========Diarista=============');

let diarista1: Diarista = new Diarista();
print(diarista1.calcularSalario());

print('===========Horista=============');

let Horista1: Horista = new Horista();
print(Horista1.calcularSalario());

print('===========Pessoa=============');

let pessoa1: Pessoa = new Pessoa('Romero Antonio', 'Ramos de Mendonça');
print(pessoa1.nomeCompleto);

print('============Funcionario============');

let funcionario1: Funcionario = new Funcionario('Ana', 'Silva', '24A', 4200);
print(funcionario1.calcularSalarioPrimeiraParcela());
print(funcionario1.calcularSalarioSegundaParcela());

print('===========Funcionario com salario negativo=============');

let funcionario2: Funcionario = new Funcionario('Arthur', 'Ramos', '27A', -400);
print(funcionario2.salario);
print(funcionario2.calcularSalarioPrimeiraParcela());
print(funcionario2.calcularSalarioSegundaParcela());
funcionario2.salario = 2250;
print(funcionario2.salario);
print(funcionario2.calcularSalarioPrimeiraParcela());
print(funcionario2.calcularSalarioSegundaParcela());

print('============Professor============');

let professor1: Professor = new Professor('Ana', 'Silva', '45B', 8500, 'Especialista');
print(professor1.titulacao);
print(professor1.calcularSalarioPrimeiraParcela());
print(professor1.calcularSalarioSegundaParcela());

print('===========Fim=============');
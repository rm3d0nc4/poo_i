"use strict";
class Funcionario {
    constructor(salario) {
        this.salario = salario;
    }
}
class Gerente extends Funcionario {
    constructor(salario) {
        super(salario);
    }
    getBonificacao() {
        return this.salario * .4;
    }
}
class Diretor extends Funcionario {
    constructor(salario) {
        super(salario);
    }
    getBonificacao() {
        return this.salario * .6;
    }
}
class Presidente extends Funcionario {
    constructor(salario) {
        super(salario);
    }
    getBonificacao() {
        return this.salario + 1000;
    }
}

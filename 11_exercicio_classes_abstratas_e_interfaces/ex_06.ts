abstract class Funcionario {
    protected salario: number;

    constructor(salario: number) {
        this.salario = salario;
    }
    
    abstract getBonificacao(): number;
}

class Gerente extends Funcionario {


    constructor(salario: number) {
        super(salario);
    }

    getBonificacao(): number {
        return this.salario * .4;
    }
}

class Diretor extends Funcionario {


    constructor(salario: number) {
        super(salario);
    }

    getBonificacao(): number {
        return this.salario * .6;
    }
}

class Presidente extends Funcionario {


    constructor(salario: number) {
        super(salario);
    }

    getBonificacao(): number {
        return this.salario + 1000;
    }
}


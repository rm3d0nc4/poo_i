// 7. Considerando o exemplo da classe Retangulo dos slides, implemente um 
// método adicional chamado que calcule o perímetro do retângulo e altere 
// a classe TestaRetangulo para exibir o cálculo do perímetro

class Retangulo {
    l1: number = 0;
    l2: number = 0;

    calcularArea(): number {
        return this.l1 * this.l2;
    }

    calcularPerimetro(): number {
        return (this.l1 * 2) + (this.l2 * 2);
    }
}

function main07() {
    let retangulo1 = new Retangulo();
    retangulo1.l1 = 2;
    retangulo1.l2 = 4;

    let areaRetangulo1: number = retangulo1.calcularArea();
    let perimetroRetangulo1: number = retangulo1.calcularPerimetro();
    
    console.log(areaRetangulo1.toFixed(2));
    console.log(perimetroRetangulo1.toFixed(2));
}

main07();
// 8. Crie uma classe Circulo que possua um atributo raio. Crie dois 
// métodos que calculam a área e o perímetro. Instancie um objeto 
// dessa classe, atribua um valor ao raio e exiba a área e o 
// perímetro chamando os dois métodos definidos


class Circulo {
    raio: number = 0;

    constructor(raio: number) {
        this.raio = raio;
    }

    calcularArea() {
        return Math.PI * this.raio**2;
    }
    
    calcularPerimetro() {
        return 2 * Math.PI * this.raio;
    }
}

function main08() {
    let circulo1 = new Circulo(4);
    
    let areaCirculo1: number = circulo1.calcularArea();
    let perimetroCirculo1: number = circulo1.calcularPerimetro();

    console.log(areaCirculo1.toFixed(2));
    console.log(areaCirculo1.toFixed(2));

}

main08();
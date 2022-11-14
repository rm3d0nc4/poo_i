import { Circulo, Quadrado, Triangulo } from "./classes";

class TesteFigurasGeometricas {
    private quadrado1: Quadrado = new Quadrado(4);
    private triangulo1: Triangulo = new Triangulo(4, 6,8, 6);
    private circulo1: Circulo = new Circulo(4.5);

    testarMetodos(): void {
        console.log(`Quadrado{area: ${this.quadrado1.calcularArea()}, perimetro: ${this.quadrado1.calcularPerimetro()}}`)
        console.log(`Triangulo{area: ${this.triangulo1.calcularArea()}, perimetro: ${this.triangulo1.calcularPerimetro()}}`)
        console.log(`Circulo{area: ${this.circulo1.calcularArea().toFixed(2)}, perimetro: ${this.circulo1.calcularPerimetro().toFixed(2)}}`)
    }
}


let teste:TesteFigurasGeometricas = new TesteFigurasGeometricas();
teste.testarMetodos();
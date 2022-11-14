import { Circulo, Quadrado, Triangulo } from './ex_08/classes';
class TesteFigurasGeometricas2  {
    private quadrado1: Quadrado = new Quadrado(4);
    private triangulo1: Triangulo = new Triangulo(4, 6,8, 6);
    private circulo1: Circulo = new Circulo(4.5);
    private circulo2: Circulo = new Circulo(4.5);

    testarMetodos(): void {
        console.log(this.quadrado1.comparar(this.triangulo1));
        console.log(this.triangulo1.comparar(this.circulo1));
        console.log(this.circulo1.comparar(this.quadrado1));
        console.log(this.circulo1.comparar(this.circulo2));
        
    }
}

let teste:TesteFigurasGeometricas2 = new TesteFigurasGeometricas2();
teste.testarMetodos();
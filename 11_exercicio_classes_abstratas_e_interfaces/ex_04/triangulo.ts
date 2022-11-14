import FiguraGeometrica from "./figura_geometrica";

class Triangulo extends FiguraGeometrica {
    private base: number;
    private altura: number
    private lado1: number;
    private lado2: number;
    
    constructor(base: number, altura: number, lado1: number, lado2: number) {
        super();
        this.base = base;
        this.altura = altura;
        this.lado1 = lado1;
        this.lado2 = lado2;
    }

    calcularArea(): number {
        return (this.base * this.altura) / 2;
    }

    calcularPerimetro(): number {
        return this.base + this.lado1 + this.lado2;
    }
}
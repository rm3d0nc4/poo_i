import FiguraGeometrica from "./interface";

export class Quadrado implements FiguraGeometrica {
    private lado: number;
    
    constructor(lado: number) {
        this.lado = lado;
    }

    calcularArea(): number {
        return this.lado ** 2;
    }
    calcularPerimetro(): number {
        return this.lado * 4;
    }
}

export class Triangulo implements FiguraGeometrica {
    private base: number;
    private altura: number;
    private lado1: number;
    private lado2: number;
    
    constructor(base: number, altura: number, lado1: number, lado2: number) {
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

export class Circulo implements FiguraGeometrica {
    private raio: number;
    
    constructor(raio: number) {
        this.raio = raio;;
    }

    calcularArea(): number {
        return (Math.PI * this.raio) ** 2;
    }
    
    calcularPerimetro(): number {
        return 2 * Math.PI * this.raio;
    }
}
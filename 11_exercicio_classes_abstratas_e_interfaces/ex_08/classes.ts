import FiguraGeometrica from "../ex_07/interface";
import IComparavel from "./interface";

export class Quadrado implements FiguraGeometrica, IComparavel {
    private lado: number;
    
    constructor(lado: number) {
        this.lado = lado;
    }

    comparar(figura: FiguraGeometrica): number {
        if(this.calcularArea() > figura.calcularArea()) return 1;
        else if(this.calcularArea() < figura.calcularArea()) return -1;
        else return 0;
    }

    calcularArea(): number {
        return this.lado ** 2;
    }
    calcularPerimetro(): number {
        return this.lado * 4;
    }
}

export class Triangulo implements FiguraGeometrica, IComparavel {
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

    comparar(figura: FiguraGeometrica): number {
        if(this.calcularArea() > figura.calcularArea()) return 1;
        else if(this.calcularArea() < figura.calcularArea()) return -1;
        else return 0;
    }

    calcularArea(): number {
        return (this.base * this.altura) / 2;
    }

    calcularPerimetro(): number {
        return this.base + this.lado1 + this.lado2;
    }
}

export class Circulo implements FiguraGeometrica, IComparavel {
    private raio: number;
    
    constructor(raio: number) {
        this.raio = raio;;
    }
    
    comparar(figura: FiguraGeometrica): number {
        if(this.calcularArea() > figura.calcularArea()) return 1;
        else if(this.calcularArea() < figura.calcularArea()) return -1;
        else return 0;
    }

    calcularArea(): number {
        return (Math.PI * this.raio) ** 2;
    }
    
    calcularPerimetro(): number {
        return 2 * Math.PI * this.raio;
    }
}
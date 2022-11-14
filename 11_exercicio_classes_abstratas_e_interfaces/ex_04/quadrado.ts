import FiguraGeometrica from "./figura_geometrica";

class Quadrado extends FiguraGeometrica {
    private lado: number;
    
    constructor(lado: number) {
        super();
        this.lado = lado;
    }

    calcularArea(): number {
        return this.lado ** 2;
    }
    calcularPerimetro(): number {
        return this.lado * 4;
    }
}
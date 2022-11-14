import FiguraGeometrica from "./figura_geometrica";

class Circulo extends FiguraGeometrica {
    private raio: number;
    
    constructor(raio: number) {
        super();
        this.raio = raio;;
    }

    calcularArea(): number {
        return (Math.PI * this.raio) ** 2;
    }
    
    calcularPerimetro(): number {
        return 2 * Math.PI * this.raio;
    }
}
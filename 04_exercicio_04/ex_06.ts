class Triangulo {
    l1: number;
    l2: number;
    l3: number;

    constructor(l1: number, l2: number, l3: number) {
        this.l1 = l1;
        this.l2 = l2;
        this.l3 = l3;
    }

    regra() : boolean {
        return (Math.abs(this.l2 - this.l3) < this.l1 && (this.l1 < this.l2 + this.l3));
    }
    
    ehEquilatero(): boolean {
        return this.l1 == this.l2 && this.l2 == this.l3;
    }

    ehEscaleno(): boolean {
        return this.l1 != this.l2 && this.l1 != this.l3 && this.l2 != this.l3;

    }

    ehIsosceles(): boolean {
        return !this.ehEquilatero() && !this.ehEscaleno();
    }
}

let t1: Triangulo = new Triangulo(4,4,4);
console.log(t1.regra());
console.log(t1.ehEquilatero());
console.log(t1.ehIsosceles());
console.log(t1.ehEscaleno());
console.log("=====")

let t2: Triangulo = new Triangulo(2,3,4);
console.log(t2.regra());
console.log(t2.ehEquilatero());
console.log(t2.ehIsosceles());
console.log(t2.ehEscaleno());
console.log("=====")

let t3: Triangulo = new Triangulo(5,1,1);
console.log(t3.regra());
console.log(t3.ehEquilatero());
console.log(t3.ehIsosceles());
console.log(t3.ehEscaleno());
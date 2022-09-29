"use strict";
class Triangulo {
    constructor(l1, l2, l3) {
        this.l1 = l1;
        this.l2 = l2;
        this.l3 = l3;
    }
    regra() {
        return (Math.abs(this.l2 - this.l3) < this.l1 && (this.l1 < this.l2 + this.l3));
    }
    ehEquilatero() {
        return this.l1 == this.l2 && this.l2 == this.l3;
    }
    ehEscaleno() {
        return this.l1 != this.l2 && this.l1 != this.l3 && this.l2 != this.l3;
    }
    ehIsosceles() {
        return !this.ehEquilatero() && !this.ehEscaleno();
    }
}
let t1 = new Triangulo(4, 4, 4);
console.log(t1.regra());
console.log(t1.ehEquilatero());
console.log(t1.ehIsosceles());
console.log(t1.ehEscaleno());
console.log("=====");
let t2 = new Triangulo(2, 3, 4);
console.log(t2.regra());
console.log(t2.ehEquilatero());
console.log(t2.ehIsosceles());
console.log(t2.ehEscaleno());
console.log("=====");
let t3 = new Triangulo(5, 1, 1);
console.log(t3.regra());
console.log(t3.ehEquilatero());
console.log(t3.ehIsosceles());
console.log(t3.ehEscaleno());

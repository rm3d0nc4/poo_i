"use strict";
class ClasseAbstrata {
}
class ClasseConcreta extends ClasseAbstrata {
    imprimaAlgo() {
        throw new Error("Method not implemented.");
    }
}

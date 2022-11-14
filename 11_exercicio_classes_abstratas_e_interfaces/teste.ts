abstract class ClasseAbstrata {
    abstract imprimaAlgo(): void ;
}

class ClasseConcreta extends
ClasseAbstrata {
    imprimaAlgo(): void {
        throw new Error("Method not implemented.");
    }
}
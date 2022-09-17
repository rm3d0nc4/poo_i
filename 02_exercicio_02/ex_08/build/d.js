"use strict";
var Pessoa = /** @class */ (function () {
    function Pessoa(name, paymentTime, prefferedLang) {
        this.name = name;
        this.paymentTime = paymentTime;
        this.prefferedLang = prefferedLang;
    }
    Pessoa.prototype.output = function () {
        console.log("\n        ".concat(this.name, "\n        My payment time is ").concat(this.paymentTime, "\n        and\n        my preffered language is ").concat(this.prefferedLang, "\n        "));
    };
    return Pessoa;
}());
function main() {
    var ely = new Pessoa('Ely', 120.56, 'TypeScript');
    ely.output();
}
main();

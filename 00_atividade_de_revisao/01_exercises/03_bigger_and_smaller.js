import { input, print } from "../utils.js"

function main() {
    let bigger = -Infinity
    let smaller = Infinity
    let number;

    for(let i = 0; i < 3; i++) {
        number = Number(input(`${i+1}º Number: `))

        if(number > bigger) {
            bigger = number
        }

        if(number < smaller) {
            smaller = number
        }
    }

    print(`The bigger number is: ${bigger}`)
    print(`The smaller number is: ${smaller}`)
}

main()
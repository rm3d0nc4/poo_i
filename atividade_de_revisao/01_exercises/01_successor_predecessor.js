import { print } from "../utils.js"

function main() {
    let number = 2.1232343424332
    
    const predecessor = Math.trunc(Number(number-1))
    const successor = Math.trunc(Number(number+1))

    print(`The predecessor of number ${number} is ${predecessor}`)
    print(`The successor of number ${number} is ${successor}`)

}

main()
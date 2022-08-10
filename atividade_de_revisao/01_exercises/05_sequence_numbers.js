import { input, print } from "../utils.js"

function main() {
    let initial_number, final_number
    const numbers = input('Enter the initial number and the final number: ').split(' ').map(Number)

    numbers[0] < numbers[1] ? 
    [initial_number, final_number] = numbers : 
    [final_number, initial_number] = numbers


    for(let i = initial_number+1; i < Math.trunc(final_number); i++) {
        print(Math.trunc(i))
    }

}

main()
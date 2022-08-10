import { input, print } from "../utils.js"

function main() {
    const numbers = input('Enter a five numbers separated with space: ').split(' ').map(Number)

    const ascending_order = order_values(numbers)
    print(`Ascending order: ${ascending_order}`)

    const descending_order = order_values(numbers, false)
    print(`Descending order: ${descending_order}`)

}

function order_values(values, ascending = true) {
    let ordered_values = values
    let stored_value
    
    for(let i = 0; i < values.length; i++) {

        for(let j = 1; j < values.length; j++){
            if(ascending ? ordered_values[j] < ordered_values[j-1] : ordered_values[j] > ordered_values[j-1]) {
                stored_value = ordered_values[j]

                ordered_values[j] = ordered_values[j-1]
                ordered_values[j-1] = stored_value
            }
        }
    }

    return ordered_values
}


main()
import { input, print } from "../utils.js"

function main() {
    

    let current_value = Number(input('Enter a number: '))
    
    let values = new Array()

    while (current_value !== -1) {
        values[values.length] = current_value

        current_value = Number(input('Enter a number: '))

    }

    const mean = calculate_mean(values)
    const standard_deviation = calculate_standard_deviation(values, mean)

    print(`Mean: ${mean.toFixed(2)}`)
    print(`Standard deviation: ${standard_deviation.toFixed(2)}`)

}

function calculate_mean(values) {
    let sum = 0

    for(let value of values) {
        sum += value
    }

    const mean = sum / values.length

    return mean
}

function calculate_standard_deviation(values, mean) {
    let sum = 0

    for(let value of values) {
        sum += ((value-mean)**2)
    }

    const variance = sum / (values.length - 1)
    const standard_deviation = Math.sqrt(variance)

    return standard_deviation
}

main()
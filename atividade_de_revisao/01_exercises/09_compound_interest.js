import { input, print } from "../utils.js"

function main() {
   const v = Number(input('BRL value: '))
   const t = Number(input('Interest rate (m-m): '))

   const values = calculate_values(v, t).toString()

   print(`Values: ${values.replace(',', ' - ')}`)

}

function calculate_values(initial_value, interest_rate, month_time = 12) {
    let current_value = initial_value
    
    const values = new Array(month_time)

    for(let i = 0; i < values.length; i++) {
        current_value += (current_value * (interest_rate/100)) 
        values[i] = current_value.toFixed(2)
    }

    return values
}


main()
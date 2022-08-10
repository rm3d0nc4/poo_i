import { input, print } from "../utils.js"

function main() {
    const months = [
        'January', 'February', 'March', 
        'April', 'May', 'June',
        'July', 'August', 'September',
        'October', 'November', 'December']
    
    const number_selected_month = Number(input('Enter number of the month to be selected: '))

    const selected_month = months[number_selected_month-1]

    print(`Selected month: ${selected_month}`)
}

main()
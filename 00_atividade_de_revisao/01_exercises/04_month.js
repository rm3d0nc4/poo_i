import { input, print } from "../utils.js"

function main() {
    const months = [
        ['January', 31], ['February', 28], ['March', 31], 
        ['April', 30], ['May', 31], ['June', 30],
        ['July', 31], ['August', 31], ['September', 30],
        ['October', 31], ['November', 30], ['December', 31]]

    
    const number_selected_month = Number(input('Enter number of the month to be selected: '))

    const selected_month = months[number_selected_month-1]

    print(`Selected month: ${selected_month[0]} (${selected_month[1]} days)`)
}

main()
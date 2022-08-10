import { input, print } from "../utils.js"

function main() {
    const bitcoin_price = Number(input('BTC price: '))
    const real_to_be_converted= Number(input('BRL value to be converted: '))

    const conversion = real_to_be_converted / bitcoin_price

    print(`${real_to_be_converted.toFixed(2)} BRL is equivalent to approximately ${conversion.toFixed(8)} BTC`)
}

main()
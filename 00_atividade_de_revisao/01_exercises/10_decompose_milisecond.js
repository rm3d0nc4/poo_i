import { input, print } from "../utils.js"

function main() {

    const ms_time = Number(input('ms time: '))

    const [days, hours, minutes, seconds] = decompose_time(ms_time)

    print(`Time: ${days} days, ${hours}:${minutes}:${seconds} `)

}

function decompose_time(ms_time) {
    const [completed_days, rest_decompose_days] = decompose_in_days(ms_time)
    const [completed_hours, rest_decompose_hours] = decompose_in_hours(rest_decompose_days)
    const [completed_minutes, rest_decompose_minutes] = decompose_in_minutes(rest_decompose_hours)
    const [completed_seconds, rest_decompose_seconds] = decompose_in_seconds(rest_decompose_minutes)

    return [completed_days, completed_hours, completed_minutes, completed_seconds]

}

function decompose_in_days(ms_time) {
    const day_to_milisseconds = 24 * 3600 * 1000

    const completed_days = Math.trunc(ms_time / day_to_milisseconds)
    const rest = ms_time % day_to_milisseconds

    return [completed_days, rest]
}

function decompose_in_hours(ms_time) {
    const hour_to_milisseconds = 3600 * 1000

    const completed_hours = Math.trunc(ms_time / hour_to_milisseconds)
    const rest = ms_time % hour_to_milisseconds

    return [completed_hours, rest]
}

function decompose_in_minutes(ms_time) {
    const minute_to_milisseconds = 60 * 1000

    const completed_minutes = Math.trunc(ms_time / minute_to_milisseconds)
    const rest = ms_time % minute_to_milisseconds

    return [completed_minutes, rest]
}

function decompose_in_seconds(ms_time) {
    const second_to_milisseconds = 1000

    const completed_seconds = Math.trunc(ms_time / second_to_milisseconds)
    const rest = ms_time % second_to_milisseconds

    return [completed_seconds, rest]
}



main()
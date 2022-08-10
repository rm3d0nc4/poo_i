import { input, print } from "../utils.js"

function main() {
    const text = input('Text:')

    const formatted_text = format_text(text)

    print(formatted_text)
}

const vowels =[
    ['a','áàâãä'],
    ['e', 'éèêë'],
    ['i', 'íìîï'],
    ['o', 'óòôõö'],
    ['u', 'úùûü'],]

function format_text(text) {
    let new_text = ''
    let is_special
    let vowel
    
    for(let character of text) {

        [is_special, vowel] = is_special_vowel(character)
        
        if(is_special) {
            if(is_lower_case(character)) {
                new_text += vowel.toLowerCase()
            } else {
                new_text += vowel.toUpperCase()

            }
        } else {
            new_text += character
        }
    }

    return new_text
}

function is_special_vowel(character) {
    for(let element of vowels) {
        if(contains(element[1], character.toLowerCase())) {
            
            return [true, element[0]]
        }
    }
    return [false]
}

function contains(characters, character) {
    for(let element of characters) {
        if(element === character) {
            return true
        }
        
    }
    return false
}

const is_lower_case = (character) => character === character.toLowerCase()

main()
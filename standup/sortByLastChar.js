// Given a string of words(x), you need to return an array of the words, sorted alphabetically by the final character in each.

//If two words have the same last letter, they returned array should show that in the order they appeared in the given string.

//All inputs will be valid.

// ('man i need a taxi up to ubud'), ['a', 'need', 'ubud', 'i', 'taxi', 'man', 'to', 'up']
// ('take me to semynak'), ['take', 'me', 'semynak', 'to']

function sortLastChar(x){
    //split sort
    //sort ->
    return x.split(' ').sort((a,b) => a[a.length - 1].charCodeAt(0) - b[b.length - 1].charCodeAt(0))
}

console.log(sortLastChar('man i need a taxi up to ubud'))

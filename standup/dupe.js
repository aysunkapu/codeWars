// The goal of this exercise is to convert a string to new string where is character in the new string is "(" if that character appear only once in the original string, or ")" if that character appears more more than once in the original string. Ignore capitalization when determining if a character is a duplicate.
//examples
//din => (((
// recede => ()()()
// Success => )())())
// (( #   => ))((


function encodeDupes (string){
    //toLoweCase
    //split -> map -> indexOf === lastIndexOf ? '(' : ')'
    //join
    return string.toLowerCase().split('').map( (l,i,a) => a.indexOf(l) === a.lastIndexOf(l) ? '(' : ')').join('')
}

console.log(encodeDupes('din'), '(((')
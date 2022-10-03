// Complete the solution so that it reverses the string passed into it.
// 
// 'world'  =>  'dlrow'
// 'word'   =>  'drow'

function compSol (str){
    return str.split('').reverse().join('')
}

console.log(compSol("Nasilsin?"))

//PREP
//Parameter : is a string
//Return : is a string as well
//Example : 'word'   =>  'drow'
//Pseudocode : write a function which takes a string and return the string's reversed value
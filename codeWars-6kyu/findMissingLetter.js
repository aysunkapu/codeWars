// ESCRIPTION:
// Find the missing letter
// 
// rite a method that takes an array of consecutive (increasing) letters as input and that returns the missing letter in the array.
// 
// ou will always get an valid array. And it will be always exactly one letter be missing. The length of the array will always be at least 2.
// he array will always contain letters in only one case.
// 
// xample:
// 
// 'a','b','c','d','f'] -> 'e' ['O','Q','R','S'] -> 'P'
// 
// "a","b","c","d","f"] -> "e"
// "O","Q","R","S"] -> "P"
// Use the English alphabet with 26 letters!)

function findMissingLetter (arr){
    for(let i=0; i<arr.length-1; i++){
        const curr = arr[i].charCodeAt(0);
        const next = arr[i+1].charCodeAt(0);

        if(curr+1 !== next){
            return String.fromCharCode(curr +1)
        }
    }
}
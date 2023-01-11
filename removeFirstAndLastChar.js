// It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry with strings with less than two characters.

function removeChar(str){
    return str.slice(1,-1)
}


// parameter is a string 
//return the given string without a first and last letter
// apple -> ppl  // car-> a

console.log(removeChar("apple"), "ppl")
console.log(removeChar("car"), "a")
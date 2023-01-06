// DESCRIPTION:
// Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.

// function evenOrOdd (num){
//     return num%2===0 ? 'even':'odd'
// }


// make it even better
function evenOrOdd (num){
    return num%2 ? "Odd" : "Even"
}
// arrow function
const evenOrOdd = num => num%2 ? "Odd" : "Even"

console.log(evenOrOdd(11))

//prep
//parameter is a single number
//if the given number is even return "Even" otherwise return  "Odd" 
//example (11) => "Odd" 
// DESCRIPTION:
// Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.

function evenOrOdd (num){
    return num%2===0 ? 'even':'odd'
}

console.log(evenOrOdd(11))

//prep
//parameter is a single number
//if the given number is even return "Even" otherwise return  "Odd" 
//example (11) => Odd 
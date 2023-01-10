// DESCRIPTION:
// Summation
// Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.
// 
// For example:
// 
// summation(2) -> 3
// 1 + 2
// 
// summation(8) -> 36
// 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8
const summation = n => n * (n + 1) / 2;
console.log(summation(4))

//another solution
let summustion = function(num){
    let result = 0;
    for(let i=1; i<=num; i++){
        result += i;
    }
    return result;
}

//PREP
//Parameter : is a number
//Return : is a number as well
// Example : // summation(8) -> 36   1 + 2 + 3 + 4 + 5 + 6 + 7 + 8
//Pseudocode : write a function which takes a number and return sum of every number from 1 to number
// Debug   function getSumOfDigits that takes positive integer to calculate sum of it's digits. Assume that argument is an integer.
// 
// Example
// 123  => 6
// 223  => 7
// 1337 => 14

function getSumOfDigits (integer){
    return Array.from(String(integer), Number).reduce((x,y) => x + y)
}

console.log(getSumOfDigits(999))
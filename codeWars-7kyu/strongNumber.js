// Definition
// Strong number is the number that the sum of the factorial of its digits is equal to number itself.
// 
// For example: 145, since
// 1! + 4! + 5! = 1 + 24 + 120 = 145
// So, 145 is a Strong number.
// 
// Task
// Given a number, Find if it is Strong or not.

function strong(n){
    return [1,2,145,40585].includes(n)? 'Strong!': ' Not Strong!!'
}

console.log(strong(7))
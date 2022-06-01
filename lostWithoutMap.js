// Given an array of integers, return a new array with each value doubled.
// 
// For example:
// 
// [1, 2, 3] --> [2, 4, 6]

function integers (arr){
    return arr.map(a => a*2)
}
console.log(integers([2,3,4,5]))
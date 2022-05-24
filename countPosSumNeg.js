// Given an array of integers.
// 
// Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.
// 
// If the input is an empty array or is null, return an empty array.
// 
// Example
// For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].

function counPosSumNeg (n){
    return !n || !n.length ? [] : [
        n.filter(e => e > 0).length,
        n.filter(e => e < 0).reduce((a,b) => a+ b)    
    ]
}

console.log(counPosSumNeg([12,2,3,-1,-3,-2]))
// DESCRIPTION:
// Task:
// Given a list of integers, determine whether the sum of its elements is odd or even.
// 
// Give your answer as a string matching "odd" or "even".
// 
// If the input array is empty consider it as: [0] (array with a zero).
// 
// Examples:
// Input: [0]
// Output: "even"
// 
// Input: [0, 1, 4]
// Output: "odd"
// 
// Input: [0, -1, -5]
// Output: "even"

//parameters: an array with integers, or an empty arrray 
// result: whether the sum of the array elements is even or odd, display as an "even" or "odd"
// examples: (oddOrEven([0, 1, 5]), 'even')
//  (oddOrEven([0, 1, 3]), 'even')
//   (oddOrEven([1023, 1, 2]), 'even')
// pseudocode: use reduce method to sum the array elements and then check whether it is odd or even using a modulus, then return the appropriate string value.


function oddOrEven (array){
    return array.reduce((a,b)=> a+b, 0)%2 == 0 ? 'even' : 'odd'
}

console.log(oddOrEven([1,2,3,4]))
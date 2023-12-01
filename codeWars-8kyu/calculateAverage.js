// Write a function which calculates the average of the numbers in a given list.
// 
// Note: Empty arrays should return 0.

function calAverage (arr){
    return arr.length === 0 ? 0 : arr.reduce( (acc, ind) => acc+ind, 0 )/arr.length
}

console.log(calAverage([2,3,4]))
 //PREP
 //Parameter : is an array with numbers
 //Return : is a number
//Example : [1,2,3,4,5] => 3
//Pseudocode : write a function which takes an array with numbers and return the average of the list of numbers

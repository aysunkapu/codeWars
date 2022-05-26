// Write a function which calculates the average of the numbers in a given list.
// 
// Note: Empty arrays should return 0.

function calAverage (arr){
    return arr.length === 0 ? 0 : arr.reduce( (acc, ind) => acc+ind, 0 )/arr.length
}

console.log(calAverage([2,3,4]))
// An ordered sequence of numbers from 1 to N is givenone number sight have deleted from it, then the remaining numbers were mixed. Find the number that was deleted. 

//Example

//Teh starting array sequence is [1,2,3,4,5,6,7,8,9]
//The mixed array with one deleted number is [3,2,4,6,7,8,1,9]
// Your function shold return int 5.
//If no number was deleted from the array and no difference with it, your function should return the int 0.

// Note: N may be 1 or less (in the letter case, the first array will be [])

// findDeletedNumber(([1,2,3,4,5], [3,4,1,5]), 2, 'Deletion')
// findDeletedNumber(([1,2,3,4,5,6,7,8,9], [5,7,6,9,4,8,1,2,3]), 0, 'No Deletion')

function missingNumber(arr, mixArr){
    //use filter method
    return arr.filter(n=> mixArr.indexOf(n)=== -1 )[0] || 0
}
console.log(missingNumber([1,2,3],[1,2,3]))
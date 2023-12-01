// The pipes connecting your level's stages together need to be fixed before you receive any more complaints.
// 
// Pipes list is correct when each pipe after the first index is greater (+1) than the previous one, and that there is no duplicates.
// 
// Task
// Given the a list of numbers, return a fixed list so that the values increment by 1 for each index from the minimum value up to the maximum value (both included).
// 
// Example
// Input:  1,3,5,6,7,8 Output: 1,2,3,4,5,6,7,8

function pipeFix(numbers){
    let result = [];
    for(let i=numbers[0]; i <=numbers[numbers.length-1]; i++){
      result.push(i);
    }
    return result;
  
  }
  
  //prep
  //parameter is an array with pos integers
  //return is the arr of sorted and  consecutive  cons
  //example pipeFix([1,2,3,5,6,8,9]),[1,2,3,4,5,6,7,8,9])
  // pipeFix([1,2,3,12]),[1,2,3,4,5,6,7,8,9,10,11,12]) 
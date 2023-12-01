// Make this work: duplicate([1,2,3,4,5]); // [1,2,3,4,5,1,2,3,4,5]
function duplicate(arr) {
 return arr.concat(arr); 
}

console.log(duplicate([1,2,3]))


//prep
//parameter is an array
//return is the dup. of the given array
//example  duplicate([1,2,3,4,]);  [1,2,3,4,1,2,3,4]

// You need to create a function that when provided with a triplet, returns the index of the numerical element that lies between the other two elements.

// The input to the function will be an array of three distinct numbers.

//For example:

//midNum([2,3,1]) => 0

//2 is the number that fits between 1 3 and the index of 2 in the input array is 0
//Another example (just to make sure it is clear):

//midNum([5,10,14]) =>1
//10 is the number that fits between 5 and 14 and the index of 10 in the input array is 1. 

function middNum(arr){
    return arr.indexOf([...arr].sort((a,b)=> a- b)[1])
}
console.log(middNum([4,1,7]))
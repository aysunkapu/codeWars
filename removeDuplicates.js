// DESCRIPTION:
// Define a function that removes duplicates from an array of numbers and returns it as a result.
// 
// The order of the sequence has to stay the same.

function dis (a){
    return a.filter((x, index)=> a.indexOf(x) === index);
}

//prep
//parameter is an array
//return is the array without duplicates
//example ([1,1,2]), [1,2])
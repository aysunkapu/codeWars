// You get an array of numbers, return the sum of all of the positives ones.

// Example [1,-4,7,12] => 1 + 7 + 12 = 20
// 
// Note: if there is nothing to sum, the sum is default to 0.



//have an array as a parameter
//return sum of pos numbers
// example [1,-4,7,12] => 1 + 7 + 12 = 20


function posSum(arr){
    let posArrSum = 0;
    for(let i=0; i<arr.length; i++){
        if(arr[i]>0){
            posArrSum += arr[i]
        }
    }
    return posArrSum
}


function posSum(arr){
    return arr.reduce((a,b)=> a + (b > 0? b : 0),0)
}
console.log(posSum([1,-4,7,12]), 20)
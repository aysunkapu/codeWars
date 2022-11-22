//Given an array of integers, find the Nth smallest element in this array of integers. 
//Notes
//Array list size at least 3
//Array list's numbers could be a mixture of positives, negatives and zeros
//Repetition in array/list's numbers could occur, so do not remove duplications

function nthSmallest(arr, n){
    return arr.sort((a,b)=>a-b)[n-1]
}
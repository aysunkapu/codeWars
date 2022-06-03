// You are given two interior angles (in degrees) of a triangle.
// 
// Write a function to return the 3rd.
// 
// Note: only positive integers will be tested.

function findOtherAngle (a,b){
    return 180 - (a+b)
}

console.log(findOtherAngle(20,50))
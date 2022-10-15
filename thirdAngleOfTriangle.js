// You are given two interior angles (in degrees) of a triangle.
// 
// Write a function to return the 3rd.
// 
// Note: only positive integers will be tested.

function findOtherAngle (a,b){
    return 180 - (a+b)
}

console.log(findOtherAngle(20,50))

// prep
//parameters are numbers
// return is a single number of the last angle
//example otherAngle(30, 60), 90);
//        otherAngle(60, 60), 60);
//        otherAngle(43, 78), 59)
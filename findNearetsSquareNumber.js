// DESCRIPTION:
// Your task is to find the nearest square number, nearest_sq(n), of a positive integer n.
// 
// Goodluck :)

function nearestSquareNumber (n){
    return Math.pow(Math.round(Math.sqrt(n)), 2);
}
console.log(nearestSquareNumber(12))
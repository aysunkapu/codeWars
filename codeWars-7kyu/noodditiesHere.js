// write a small function that returns the values of an array that are not odd.
// all values in the arrar will be integers. return the goood values in the order they are given.
// function noOdds(values)

function noOdds(values){
    for(let i=0; i<values.length; i++){
        if(i%2 == 0 ){
            return i
        }
    }
}
console.log(noOdds([1,2,3,4,5]))
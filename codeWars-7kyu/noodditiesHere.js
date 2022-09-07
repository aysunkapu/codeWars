// write a small function that returns the values of an array that are not odd.
// all values in the arrar will be integers. return the goood values in the order they are given.
// function noOdds(values)

function noOdds(values){
    return values.filter(el => el%2 === 0);
}

function noOdds(values){
    const arr = []
    for(let i=0; i<values.length; i++){
        if(values[i]%2 ===0){
            arr.push(values[i])
        }
    }
    return arr
}


console.log(noOdds([1,2,3,4,5]))
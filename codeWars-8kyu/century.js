// The first century spans from the year 1 up to and including the year 100, the second century - from the year 101 up to and including the year 200, etc.
// 
// Task
// Given a year, return the century it is in.
// 
// Examples
// 1705 --> 18
// 1900 --> 19
// 1601 --> 17

function centuryCall (year){
    return Math.ceil(year/100)
}
//another solution
function centuryCall(year){
    let century = 0;
    for(let i=0; i<year; i++){
        if(i%100 == 0){
            century++
        }
    }
    return century
}

console.log(centuryCall(2005))

//prep
//parameter is a single num as a year
//return the century of the given year
//example  1900 --> 19   1601 --> 17

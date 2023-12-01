// Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

// Return your answer as a number.

function sumMix(x){
    return x.reduce((c, a) => Number(c) + Number(a), 0)
  
  }

  //prep
  //parameter is an array
  //return should be sum of the array
  //(sumMix([9, 3, '7', '3']), 22)
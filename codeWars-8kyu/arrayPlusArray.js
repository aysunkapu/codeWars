// I'm new to coding and now I want to get the sum of two arrays... Actually the sum of all their elements. I'll appreciate for your help.
// 
// P.S. Each array includes only integer numbers. Output is a number too.

// prep
//parameters are arrays with numbers
// return should be sum of the arrays
// example ([1, 2, 3], [4, 5, 6]), 21)

function arrayPlusArray(arr1, arr2) {
    return arr1.reduce((a,b)=> a+b,0) + arr2.reduce((c,d)=> c+d,0) //something went wrong
  }

  function arrayPlusArray(arr1, arr2) {
    return arr1.concat(arr2).reduce((acc, cur) => acc + cur);
  }
  //with loop

  function arrayPlusArray(arr1, arr2){
    let sum = 0;
    for(let i=0; i < arr1.length; i++){
      const arrVal1=arr1[i];
      const arrVal2=arr2[i];

      const addedVal = arrVal1 + arrVal2;
      sum += addedVal;
    }
    return sum
  }
  console.log(arrayPlusArray([1, 2, 3], [4, 5, 6]))
// Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).
// 
// For example,
// 
// [true,  true,  true,  false,
//   true,  true,  true,  true ,
//   true,  false, true,  false,
//   true,  false, false, true ,
//   true,  true,  true,  true ,
//   false, false, true,  true]
// The correct answer would be 17.
// 
// Hint: Don't forget to check for bad values like null/undefined

function countSheeps(arr) {
    return arr.filter(Boolean).length;
  }

  //PREP
  //Parameter : is an array with boolean variables
  //Result : is a number
  //Example : [true,  true,  true,  false,
//   true,  true,  true,  true ,
//   true,  false, true,  false,
//   true,  false, false, true ,
//   true,  true,  true,  true ,
//   false, false, true,  true]
//   answer would be 17.
//Pseudocode : write a funct that takes an array with true and false and return true values length
// If you can't sleep, just count sheep!!
// 
// Task:
// Given a non-negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...". Input will always be valid, i.e. no negative integers.


function countSheep (num){
    let str = "";
    for(let i=1; i<=num; i++){
        str += `${i} sheep...`
    }
    return str
  }


console.log(countSheep(12))

//prep
//paramaeter is a single number
// return is "1 sheep...2 sheep...3 sheep..." according to the parameter
//example (countSheep(0), "");
//        (countSheep(1), "1 sheep...");
//        (countSheep(2), "1 sheep...2 sheep...");
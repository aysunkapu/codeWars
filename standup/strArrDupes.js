// You will be given an array of strings and your task is to remove all consecutive duplicate letters from each string in the arrray.

// For Example:
// dup(["abracadabra", "allottee", "assessee"]) = ["abracadabra", "alote", "asese"]
// dup (["kelless", "keenness"]) = ["keles", "kenes"]


//String will be lowercase only, no spaces

function stringDup(arr){
// map-> word-split-filter-join
  return arr.map(
    word => word.split('').filter((l,i,a)=> l !=a[i-1]).join('')
  )
}

// another solution
function dup(array) {
    return array.map(word => word.split('').filter( (letter, index) => letter !== word[index + 1]).join(''))
    };

console.log(stringDup(["kelless", "keenness"]), "['keles', 'kenes']")
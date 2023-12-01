// Take an array and remove every second element from the array. Always keep the first element and start removing with the next element.
// 
// Example:
// 
// ["Keep", "Remove", "Keep", "Remove", "Keep", ...] --> ["Keep", "Keep", "Keep", ...]
// 
// None of the arrays will be empty, so you don't have to worry about that!

function removeElements (arr){
    return arr.filter(function(e,i){
        return i % 2 === 0
    })
}
console.log(removeElements([1,2,3,4,5,6]))

//prep
//parameter is an array
// return is even index of the array
// example // ["Keep", "Remove", "Keep", "Remove", "Keep", ...] --> ["Keep", "Keep", "Keep", ...]

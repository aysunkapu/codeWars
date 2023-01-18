// Write a function to split a string and convert it into an array of words.
// 
// Examples (Input ==> Output):
// "Robin Singh" ==> ["Robin", "Singh"]
// 
// "I love arrays they are my favorite" ==> ["I", "love", "arrays", "they", "are", "my", "favorite"]


function toAnArray (str){
    return str.split(" ")
}

console.log(toAnArray("Hello World"))
console.log(toAnArray("Merhaba Dunya"))
//prep
//parameter is a string
//return the string into an array of words
//example "Robin Singh" ==> ["Robin", "Singh"]
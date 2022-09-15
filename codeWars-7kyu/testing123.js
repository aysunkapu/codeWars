// Your team is writing a fancy new text editor and you've been tasked with implementing the line numbering.
// 
// Write a function which takes a list of strings and returns each line prepended by the correct number.
// 
// The numbering starts at 1. The format is n: string. Notice the colon and space in between.
// 
// Examples: (Input --> Output)
// 
// [] --> []
// ["a", "b", "c"] --> ["1: a", "2: b", "3: c"]

//PARAMETERS: an array of varying length containing string values
// RESULT: an array of strings contaning the original values with theline number and a colon + space in front 
// EXAMPLES: ["a", "b", "c"] --> ["1: a", "2: b", "3: c"]
//PSEUDOCODE: iterate over each array value and prepend the line number starting with one and add a colon and aspace between the line number and the value

let number = function (array){
    console.log(array.map((el, index) => `${index + 1}: ${el}`))
}
number(["a","b","c"])
// DESCRIPTION:
// You are given the length and width of a 4-sided polygon. The polygon can either be a rectangle or a square.
// If it is a square, return its area. If it is a rectangle, return its perimeter.
// 
// Example(Input1, Input2 --> Output):
// 
// 6, 10 --> 32
// 3, 3 --> 9
// Note: for the purposes of this kata you will assume that it is a square if its length and width are equal, otherwise it is a rectangle.

const areaOrPerimeter = function(length , width) {
    return length==width ? length*width : (length+width)*2
  };
 console.log(areaOrPerimeter(10,5))
//PREP
//Parameters: are numbers with length and width
//Return : is a number
//Example : 6, 10 --> 32 3, 3 --> 9
//Pseudocode : write a function that takes numbers and if it is a square return its area, if its rec return its perimeter
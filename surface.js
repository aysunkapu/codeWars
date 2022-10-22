// DESCRIPTION:
// Write a function that returns the total surface area and volume of a box as an array: [area, volume]

function getSize(width, height, depth){
    return [2*(width*height + width*depth + height*depth), width*height*depth ]
  }
//prep
//parameters are numbs (3)
//return is an array of the total surface area and volume of a box 
//example (4, 2, 6), [88, 48]
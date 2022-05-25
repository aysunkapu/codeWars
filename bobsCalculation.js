// If you've completed this kata already and want a bigger challenge, here's the 3D version
// 
// Bob is bored during his physics lessons so he's built himself a toy box to help pass the time. The box is special because it has the ability to change gravity.
// 
// There are some columns of toy cubes in the box arranged in a line. The i-th column contains a_i cubes. At first, the gravity in the box is pulling the cubes downwards. When Bob switches the gravity, it begins to pull all the cubes to a certain side of the box, d, which can be either 'L' or 'R' (left or right). Below is an example of what a box of cubes might look like before and after switching gravity.

// const flip = (d,a) => a.sort((x,y) => d === 'R' ? x-y : y-x)
// 
// console.log(flip([12,2,2,3,4,5,3,3]))
// 
// Bob needs a fast way to calculate the volume of a cuboid with three values: length, width and the height of the cuboid. Write a function to help Bob with this calculation.

function calculateCuboid (length,width, height){
    return length*width*height
}
console.log(calculateCuboid(12,2,5))
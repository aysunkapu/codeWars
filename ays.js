


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

// function trip(length,width,height){
//     return length*width*height
// }
// console.log(trip(12,23,23))


// Timmy & Sarah think they are in love, but around where they live, they will only know once they pick a flower each. If one of the flowers has an even number of petals and the other has an odd number of petals it means they are in love.
// 
// Write a function that will take the number of petals of each flower and return true if they are in love and false if they aren't.

// function flowers(f1,f2){
//     if ((f1%2===0 && f2%2 !==0) || (f1%2 !==0 && f2%2===0)){
//         return 'they are fall in love'
//     }else{
//         return 'they are not fall in love'
//     }
// }
// console.log(flowers(12,31))

// Create a function that converts US dollars (USD) to Chinese Yuan (CNY) . The input is the amount of USD as an integer, and the output should be a string that states the amount of Yuan followed by 'Chinese Yuan'
// 
// Examples (Input -> Output)
// * 15  -> '101.25 Chinese Yuan'
// * 465 -> '3138.75 Chinese Yuan'
// The conversion rate you should use is 6.75 CNY for every 1 USD. All numbers should be represented as a string with 2 decimal places. (e.g. "21.00" NOT "21.0" or "21")


// function usdcny(usd){
//     return (usd*6.25).toFixed(2) + ' Chinese Yuan'
// }
// console.log(usdcny(20))

// There are pillars near the road. The distance between the pillars is the same and the width of the pillars is the same. Your function accepts three arguments:
// 
// number of pillars (≥ 1);
// distance between pillars (10 - 30 meters);
// width of the pillar (10 - 50 centimeters).
// Calculate the distance between the first and the last pillar in centimeters (without the width of the first and last pillar).

// function pillars(num_pill, dist, width){
//     return num_pill <= 1 ? 0 : (num_pill-1)*dist*100 + (num_pill - 2)*width
// 
// }
// console.log(pillars(2,20,20))
// 
// Sentence Smash
// Write a function that takes an array of words and smashes them together into a sentence and returns the sentence. You can ignore any need to sanitize words or add punctuation, but you should add spaces between each word. Be careful, there shouldn't be a space at the beginning or the end of the sentence!
// 
// Example
// ['hello', 'world', 'this', 'is', 'great']  =>  'hello world this is great'

// function hey (words){
//     return words.join(" ")
// }
// console.log(hey(['merhaba', 'guzel', 'bir', 'gun', 'olsun']))
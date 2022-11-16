// Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.
// 
// Note: input will never be an empty string

function returnDigit(digit){
    return digit.split('').map(n => n < 5 ? 0:1).join('')

}
console.log(returnDigit('hello'))

//prep
//parameter is a string
//replace any digit below 5 with '0' and any digit 5 and above with '1' then return it
//example (hello)=> 11111
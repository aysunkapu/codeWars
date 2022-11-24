// Given a string, return a new string that has transformed based on that input.
// Change case of every character, ie. lower case to upper case, upper case to loewr case.
// Reverse the order of words from the input.
//Note: You will have to handle multiple spaces, and leading/trailing spaces.

// For example:
//"Example Input" ==> "iNPUT eXAMPLE"
// You may assume the input only contain English alphabet and spaces.

function transformStr (str){
    return str.split(' ').reverse().join(' ').split('').map(l=> l === l.toUpperCase() ? l.toLowerCase() : l.toUpperCase()).join('')
}
console.log(transformStr("Example Input"),  "iNPUT eXAMPLE")
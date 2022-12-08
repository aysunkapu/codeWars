//Given a string of characters as input, write a function that returns it with the characters reversed. No reverse method (brute force it first, but then no reverse method.)



function reversedString(str){
  // return str.split('').reverse().join('')
  //str -> char
  //str-> Rev
  //empty str -> loop add each char

  let reverseStr = ""
  for(let char of str){
    reverseStr = char + reverseStr
  }
  return reverseStr
}

console.log(reversedString('boboo'), "oobob")

//parameter is a single string
//return reversed version of the given string
//'boboo' => 'oobob'
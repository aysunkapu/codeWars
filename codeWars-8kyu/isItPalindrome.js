// Write a function that checks if a given string (case insensitive) is a palindrome.

function isPalindrome(x) {
    return x.toLowerCase() == x.split('').reverse().join('').toLowerCase()
  }
  
  //prep
  //parameter is a single string
  //if the word palindrome return true otherwise return false
  //example aba=>true  abba=> true
// Description:
// Remove all exclamation marks from the end of sentence.
// 
// Examples
// remove("Hi!") === "Hi"
// remove("Hi!!!") === "Hi"
// remove("!Hi") === "!Hi"
// remove("!Hi!") === "!Hi"
// remove("Hi! Hi!") === "Hi! Hi"
// remove("Hi") === "Hi"

function remove (string) {
    return string.replace(/!$/,'');
  }
  function remov(s) {
    return s.endsWith('!') ? s.slice(0, -1) : s;
  }

//prep 
//parameter is a string 
//return is the string without exclamation marks
//example remove("Hi!") === "Hi" / remove("Hi!!!") === "Hi" / remove("!Hi") === "!Hi"
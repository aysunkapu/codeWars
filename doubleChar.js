// Given a string, you have to return a string in which each character (case-sensitive) is repeated once.
// 
// Examples (Input -> Output):
// * "String"      -> "SSttrriinngg"
// * "Hello World" -> "HHeelllloo  WWoorrlldd"
// * "1234!_ "     -> "11223344!!__"

function doubleChar(str) {
    return str.split('').map(e=> e.repeat(2)).join('')
  }

  function doub (string){
    let word = ''
    for(let i=0; i < str.length; i++){
        word = word + str[i] + str[i]
    }
    return word
  }

  //prep
  //parameter is a string
  //return is a string as well but each character shhould be repeated twice
  // example // * "Hello World" -> "HHeelllloo  WWoorrlldd"
             // * "1234!_ "     -> "11223344!!__"
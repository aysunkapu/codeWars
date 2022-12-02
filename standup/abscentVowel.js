// Your job is tho figure out the index of which vowel is missing from a giving string:
// A has an index of 0
// E has an index of 1,
// I has an index of 2,
// 0 has an index of 3
// U has an index of 4
// Notes: There is no need for string validation and every sentence given will contain all vowles but one Also, you won't need to worry about capitals.


// Examples
// "John Doe hs seven red pples under his bsket"=> 0 missing: "a"

// "Bb Smith sent us sux neatly arranged range bicycles" => "o" missing:"O"


function missingVowel(str){
// List all Vowels --> loop each vowel ans see if str
let vowels = 'aeiou'
for(let i=0; i<vowels.length; i++){
    if(str.indexOf(vowels[i]) ===-1){
     return i
    }
 }
}
console.log(missingVowel("pple"))


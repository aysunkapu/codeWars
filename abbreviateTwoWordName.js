// Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.
// 
// The output should be two capital letters with a dot separating them.
// 
// It should look like this:
// 
// Sam Harris => S.H
// 
// patrick feeney => P.F

function abbreviateName (name){
    return name.split(' ').map(i => i[0].toUpperCase()).join('.')
}

console.log(abbreviateName('aysun kapusuz'))

//PREP
//Parameter : is a string
//Result : is a string as well
//Example : // Sam Harris => S.H   patrick feeney => P.F
//Pseudocode : write a function which takes name with surname and return the first letters from name parameter, capitalize them and put dot between them, no space

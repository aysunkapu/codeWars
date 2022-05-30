// Write a function that returns a string in which firstname is swapped with last name.

// nameShuffler('john McClane'); => "McClane john"

function shuffleTheName (name){
    return name.split(' ').reverse().join(' ')
}
console.log(shuffleTheName('Aysun Kapusuz'))
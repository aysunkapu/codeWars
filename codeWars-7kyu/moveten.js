// DESCRIPTION:
// Move every letter in the provided string forward 10 letters through the alphabet.
// 
// If it goes past 'z', start again at 'a'.
// 
// Input will be a string with length > 0.

function moveTen (s){
    const alpha = 'abcdefghijklmnopqrstuvwxyz';
    const map = 'klmnopqrstuvwxyz'
    return [...s].map(x => map[alpha.indexOf(x)]).join('');
}

console.log(moveTen('klm'))
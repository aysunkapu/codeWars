// You'll be given a string, and have to return the sum of all characters as an int. The function should be able to handle all ASCII characters.
// 
// examples:
// 
// uniTotal("a") == 97 uniTotal("aaa") == 291

function uniTotal(a){
    return a.split('').reduce((s,c) => s+c.charCodeAt(),0)
}

console.log(uniTotal('aaa'))
// This time no story, no theory. The examples below show you how to write function accum:
// 
// Examples:
// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"
// The parameter of accum is a string which includes only letters from a..z and A..Z.

function acc(string){
    return string.split('').map((x, index) => x.toUpperCase()+Array(index+1).join(x.toLowerCase())).join('-')
}
console.log(acc('abcc'))
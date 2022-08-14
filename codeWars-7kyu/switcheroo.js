// DESCRIPTION:
// Given a string made up of letters a, b, and/or c, switch the position of letters a and b (change a to b and vice versa). Leave any incidence of c untouched.
// 
// Example:
// 
// 'acb' --> 'bca'
// 'aabacbaa' --> 'bbabcabb'

function switchero(string){
    return string.split('').map(function(el){
        if(el== 'b') return 'a';
        if(el== 'a') return 'b';
        if(el== 'c') return 'c'
    }).join('')
}
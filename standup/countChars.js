// Count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

//What if the string is empty? Then the result should be empty object literal, {}.

function countCharacters(str){
    //create an object
    let countObj = {}
    // loop-> check val exist ? val++ : val-1
    for(const c of str){
        if( countObj[c] ){
            countObj[c]++
        }else{
            countObj[c] = 1
        }
    }
    return countObj

}

console.log(countCharacters('abaa'), "{'a': 3, 'b': 1}")

//parameter is a string 
//count all the occurring chars. and return as an object
// for example abaa -> {'a': 3, 'b': 1}
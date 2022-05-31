// Complete the function that takes two integers (a, b, where a < b) and return an array of all integers between the input parameters, including them.

function integers (a,b){
    arr = [1,2,3]
    for (let i=a; i<=b; i++){
        arr.push(i)
    }
    console.log(arr)

}

integers(1,8)  
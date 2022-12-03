// Given a number as an input, print out every integer from 1 to that number. However, when the integer is divistble by 2 print out "Fizz"; when it's divisible by 3, print out "Buzz" when it's divistble by both 2 and 3, print out "Fizz Buzz"

function fizzBuzz (num){
    for(let i=1; i<=num; i++){
        if(num%6===0){
            console.log('FizzBuzz')
        }else if(num%2===0){
            console.log('Fizz')
        }else if(num%3===0){
            console.log('Buzz')
        }else{
            console.log(i)
        }
        
    }
}


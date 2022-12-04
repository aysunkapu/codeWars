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

//prep
//parameter is a single number
//console log every num from 1 to given number and if the integer is divisible by 2 print out " Fizz" if the integer is divisible by 3 print out "Buzz",  f the integer is divisible by 2 and 3 print out "FizzBuzz"
// example (3)=> 1
               // Fizz
               // Buzz
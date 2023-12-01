// DESCRIPTION:
// Make a function that returns the value multiplied by 50 and increased by 6. If the value entered is a string it should return "Error".

function valueMultAndIncrease (val){
    return typeof val === 'number' ? val*50+6 : 'Error'
}

console.log(valueMultAndIncrease(12))

//prep
//have a parameter which can be num or string
//if the value is num return num*50 +6, if not return 'Error'
//example problem("hello"), "Error" /  problem(1), 56
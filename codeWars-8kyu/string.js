// Given a string of text, write an algorithm that returns the text received in a reversed format. E.g

function reverseString(word) {
    return word.split('').reverse.join('')
}
// Applying cutting-edge ES6 syntax, we can use the spread operator as shown below to tweak this solution a bit.
function reverseString(word){
    return [...word].reverse().join('')
}

//The spread operator … , like the .split() method will spread the characters of the string into array elements.


// The For-Loop way
// For loops are used to execute a piece of code as long as a condition is met. In the solution below, we use a decrementing for-loop to run through the string received and append each character to another variable in reverse order. See how this is done below:

function reverseString(text) {
    let result = ""

    for (let i = text.length - 1; i >= 0; i--) {
        result += text[i]
    }

    return result
}

// We can improve this implementation further as shown below,by using the for…of loop in ES6.
// 
// The for…of statement in JavaScript is used to execute a certain piece of code for each distinct item(property) of an iterable object.
// 
// We use it below to run through each character in the text received and append it to the beginning of a new variable result which we return on completion as it now holds the reversed string.
// 
function reverseString(text){
    let result = "";

    for(let char of text){
        result = char + result
    }

    return result;
}

// The Recursive Way
function reverseString(text) {
    if (text === "") {
        return ""
    } else {
        return reverseString(text.substr(1)) + text[0]
    }
}

//Using .reduce()
function reverseSt(text) {
    return text.split("").reduce((acc, char) => char + acc, '')
}
console.log(reverseSt('aysun'))
//Using the ES6 spread operator, we have:

function reverseString(text) {
    return [...text].reduce((acc, char) => char + acc, '')
}

// From the test carried out, the fastest solution we have considered is using the .reduce() method. Next, is the for-loop method which is only 6% slower and is a pretty close one. The slowest of them all is the method of chaining .split(), .reduce() and .join(59% slower).
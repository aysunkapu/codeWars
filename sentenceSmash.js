<<<<<<< HEAD
// Sentence Smash
// Write a function that takes an array of words and smashes them together into a sentence and returns the sentence. You can ignore any need to sanitize words or add punctuation, but you should add spaces between each word. Be careful, there shouldn't be a space at the beginning or the end of the sentence!
// 
// Example
// ['hello', 'world', 'this', 'is', 'great']  =>  'hello world this is great'


function sentSmash (sent){
    return sent.join(" ")
}

=======
// Sentence Smash
// Write a function that takes an array of words and smashes them together into a sentence and returns the sentence. You can ignore any need to sanitize words or add punctuation, but you should add spaces between each word. Be careful, there shouldn't be a space at the beginning or the end of the sentence!
// 
// Example
// ['hello', 'world', 'this', 'is', 'great']  =>  'hello world this is great'


function sentSmash (sent){
    return sent.join(" ")
}

>>>>>>> 57f16c90aeb962d059efa6a115b407fc096e5a60
console.log(sentSmash(["Have", "a", "good", "day!"]))
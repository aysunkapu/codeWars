// Write function RemoveExclamationMarks which removes all exclamation marks from a given string.

function removeExcMarks (str){
    return str.split('!').join('')
}

console.log(removeExcMarks('!He!llo!'))
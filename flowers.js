<<<<<<< HEAD
// Timmy & Sarah think they are in love, but around where they live, they will only know once they pick a flower each. If one of the flowers has an even number of petals and the other has an odd number of petals it means they are in love.

// Write a function that will take the number of petals of each flower and return true if they are in love and false if they aren't.

function flowers(f1,f2){
    if(f1 % 2 === 0 && f2 % 2 !== 0 || f1 % 2 !== 0 && f2 % 2 === 0 ){
        return true
    }else{
        return false
    }
}
=======
// Timmy & Sarah think they are in love, but around where they live, they will only know once they pick a flower each. If one of the flowers has an even number of petals and the other has an odd number of petals it means they are in love.

// Write a function that will take the number of petals of each flower and return true if they are in love and false if they aren't.

function flowers(f1,f2){
    if(f1 % 2 === 0 && f2 % 2 !== 0 || f1 % 2 !== 0 && f2 % 2 === 0 ){
        return true
    }else{
        return false
    }
}
>>>>>>> 57f16c90aeb962d059efa6a115b407fc096e5a60
console.log(flowers(12,1))
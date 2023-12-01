// Build a function that returns an array of integers from n to 1 where n>0.

// Example : n=5 --> [5,4,3,2,1]

const reverseS = s => {
    let arr = [];
      for (let i=s; i>0; i--) {
        arr.push(i);
        } return arr;
    }



console.log(reverseS(6))
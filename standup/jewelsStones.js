//You are given strings jewels representing the types of stones that are jewels and stones representing the stones you have. Each character in stones is a type of stone you have.
//You want to know how many of the stones you have are also jewels.


// Letters are case sensetive, so "a" is considered a different type of stone from "A".

//Example 1;
// Input: jewels = "aA", stones = "aAAbbbb"
// Output: 3

//Example 2;
// Input: jewels = "z", stones = "ZZ"
// Output: 0

//Constraints:
//1 <= jewels.length, stones.length <= 50
//jewels and stones consist of only english letters.
// All the characters of jewels are unique. 


//Not sure about the solution

function jewelsAndStones(jewels,stones){
    const map = {},
          count = 0

    for(const jewel of jewels){
        map[jewel]=true
    }

    for(const stone of stones){
        if(map[stone]){
            count++
        }
    }
    return count
}


console.log(jewelsAndStones("aA","aAAbbbb"), '3')

//prep
//have two parameters as strings the first one should be jewels, the second one is stones
//count how many stones are jewels and return it
// example   // Input: jewels = "aA", stones = "aAAbbbb"
             // Output: 3


//Given an array nums of size n, return the majority element.
//The majority element is the elemnt that appears more than [n/2] times. You may assume that the majortiy element always exist in the array.

//Example 1:
//Input nums = [3,2,3]
//Output: 3

// Example 2:
//Input nums = [2,2,1,1,1,2,2]
//Output: 2


function majortiyElement(arr){
    let elem = {}
        count= 0,
        majElem = arr[0]

        for(const num of arr){
            elem[num] = elem[num] + 1 || 1
        }

        for(const n in elem){
            if(elem[n] > count){
                count = elem[n]
                majElem = n 
            }
        }
        return majElem

}

console.log(majortiyElement([3,2,3]), 3)
console.log(majortiyElement([2,2,1,1,1,2,2]), 2)


//parameter is a given array with integers
//return the majority element
//example: [3,2,3] -> 3    [2,2,1,1,1,2,2] -> 2
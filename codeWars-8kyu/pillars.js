//There are pillars near the road. The distance between the pillars is the same and the width of the pillars is the same. Your function accepts three arguments:
//
//number of pillars (≥ 1);
//distance between pillars (10 - 30 meters);
//width of the pillar (10 - 50 centimeters).
//Calculate the distance between the first and the last pillar in centimeters (without the width of the first and last pillar).


function pillars (numPil, dist, width){
    if(numPil <2 ){
        return 0
    }else if(numPil < 3){
        return dist*100
    }else{
        return ((numPil-2)*width) + ((100*dist)*(numPil-1))
    }
    
}

console.log(pillars(2, 20, 25))
console.log(pillars(11, 15, 30))

//have 3 parameters, number of pillars, distance between pillars and width of pillars
//return  the distance between the first and the last pillar in centimeters
// example 2, 20, 25 => 2000  // 11, 15, 30 => 15270

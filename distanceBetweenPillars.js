<<<<<<< HEAD
// There are pillars near the road. The distance between the pillars is the same and the width of the pillars is the same. Your function accepts three arguments:
// 
// number of pillars (≥ 1);
// distance between pillars (10 - 30 meters);
// width of the pillar (10 - 50 centimeters).
// Calculate the distance between the first and the last pillar in centimeters (without the width of the first and last pillar).

function pillars (numOfPillar, distance, width){
    return numOfPillar <= 1 ? 0 : (numOfPillar -1)*distance*100 + (numOfPillar-2)*width

}
=======
// There are pillars near the road. The distance between the pillars is the same and the width of the pillars is the same. Your function accepts three arguments:
// 
// number of pillars (≥ 1);
// distance between pillars (10 - 30 meters);
// width of the pillar (10 - 50 centimeters).
// Calculate the distance between the first and the last pillar in centimeters (without the width of the first and last pillar).

function pillars (numOfPillar, distance, width){
    return numOfPillar <= 1 ? 0 : (numOfPillar -1)*distance*100 + (numOfPillar-2)*width

}
>>>>>>> 57f16c90aeb962d059efa6a115b407fc096e5a60
console.log(pillars(12,6,3))
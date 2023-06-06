// You need to hire a catering company out of three for lunch in a birthday party. The first caterer offers only a basic buffet which costs $15 per person. The second one has an economy buffet at $20 per person and the third one has a premium buffet at $30 per person. The third one gives a 20% discount if the number of persons to be served is greater than 60. You want to spend the maximum that fits into the budget.
// 
// The function takes two arguments denoting the budget in $ and the number of people. Return 1, 2 or 3 for the three caterers as per the above criteria. Return -1 if there are no people or the budget is lower than the cost of buffets from the first caterer.
// 
// Number of orders is always equal to number of people.
// 
// For example,
// 
// 
// budget, people => (200, 9) will return 2.
// 
// budget, people => (300, 9) will return 3 and so on.


function findCaterer (budget, people){
    if(people==0) return (-1);
    let perp = budget/people;
    if(perp >= 30 || (people > 60 && perp >= 24))
    return (3);
    else if(perp >= 20)
    return (2);
    else if(perp >= 15)
    return (1);
    else return(-1);
}
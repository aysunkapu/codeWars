// Given a month as an integer from 1 to 12, return to which quarter of the year it belongs as an integer number.
// 
// For example: month 2 (February), is part of the first quarter; month 6 (June), is part of the second quarter; and month 11 (November), is part of the fourth quarter.

const quarterOf = (month) => {
    if(month < 4) return 1; 
    if(month < 7) return 2;
   if(month < 10) return 3;
   return 4;
    
  }

  const quarterOfMonth = m => Math.ceil(m/3);
    
  // prep
    //parameters is a number
    // return should be num
    // example : (quarterOf(3), 1)
    //           (quarterOf(8), 3)
    //           (quarterOf(11), 4)
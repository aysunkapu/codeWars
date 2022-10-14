// Rock Paper Scissors
// Let's play! You have to return which player won! In case of a draw return Draw!.
// 
// Examples:
// 
// rps('scissors','paper') // Player 1 won!
// rps('scissors','rock') // Player 2 won!
// rps('paper','paper') // Draw!

const rPs = (player1, player2) => {
    if (player1 == player2)
      return 'Draw!';
      
     if (player1 == 'rock' && player2 == 'scissors') 
       return 'Player 1 won!'
     else if (player1 == 'scissors' && player2 == 'paper') 
       return 'Player 1 won!'
     else if (player1 == 'paper' && player2 == 'rock') 
       return 'Player 1 won!'
     else
       return 'Player 2 won!';
  }

console.log(rPs('paper', 'scissors'))

const rps = (p1, p2) => {
  if( p1 === p2){
    return "Draw!"
  }else if(p1=== "scissors" && p2 === "paper" || p1=== "rock" && p2 === "scissors" || p1=== "paper" && p2 === "rock"){
    return "Player 1 won!"
  }else{
    return "Player 2 won!"
  }
};

// prep
// we have two parameters as p1 p2
// return should be  "Player 1 won!", "Player 2 won!" or "Draw!" according to the game
// example "scissors", "paper" --> "Player 1 won!"
//         "scissors", "rock" --> "Player 2 won!"
//         "paper", "paper" --> "Draw!"
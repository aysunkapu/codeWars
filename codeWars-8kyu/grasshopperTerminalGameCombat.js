// Create a combat function that takes the player's current health and the amount of damage recieved, and returns the player's new health. Health can't be less than 0.

function combat(health, damage) {
    return health > damage ? health - damage : 0
  }

  //prep
  //have 2 parameters as numbs
  // if the health bigger than damage return health minus damage, otherwise return 0
  //example (12,9)=> 3   (20,30) => 0
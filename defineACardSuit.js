// You get any card as an argument. Your task is to return the suit of this card (in lowercase).
// 
// Our deck (is preloaded):
// 
// ('3♣') -> return 'clubs'
// ('3♦') -> return 'diamonds'
// ('3) -> return 'hearts'
// ('3♠') -> return 'spades'

// function defineCards (card){
//     if(card == '3♣' ){
//         return 'clubs'
//     }else if(card == '3♦' ){
//         return 'diamonds'
//     }else if(card == '3♥' ){
//         return 'hearts'
//     }else if(card == '3♠' ){
//         return 'spades'
//     }
// }
// 
// console.log(defineCards('3♠'))
// 

function defineSuit(card) {
    const s = {
      "♣": "clubs",
      "♠": "spades",
      "♦": "diamonds",
      "♥": "hearts"
    }
    return s[card.charAt(card.length - 1)]
  }

  function defineSuit(card) {
    return {
      '♣' : 'clubs',
      '♦' : 'diamonds',
      '♥' : 'hearts',
      '♠' : 'spades'
    }[card.substr(-1)]
  }

  function defineSuit(card) {
    if(card.includes('♥')) return 'hearts'
    if(card.includes('♦')) return 'diamonds'
    if(card.includes('♣')) return 'clubs'
    if(card.includes('♠')) return 'spades' 
    }
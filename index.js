let cards = []

let sum = 0
let sumEl = document.getElementById("sum-el")

let cardEl = document.getElementById("card-el")

let message = ""
let messageEl = document.getElementById("message-el")

let blackjack = false
let alive = false

let playerEl = document.getElementById("player-el")
let player = {
    name: "Retaj",
    chips: 125
}
playerEl.textContent = player.name + ": $" + player.chips


function getcard() {
  let randomcard = Math.floor( Math.random() * 13) + 1
  
  if (randomcard === 1) {
      return 11
  }
  
  else if (randomcard >10) {
      return 10
  } 
  
  else {
      return randomcard
  }
}

function start() {
    
let firstcard = getcard()
let secondcard = getcard()
let cards = [firstcard, secondcard]

let sum = firstcard + secondcard
alive = true
    
    render()
}


       function render() {
           
       cardEl.textContent =  "Cards: "
       
       for (i = 0; i < cards.length; i++) {
           cardEl.textContent += cards[i] + " "
       }
       
       sumEl.textContent = "Sum: " + sum
    
           if (sum <= 20) {
            message = "Would you like to draw another card?"
          }

              else if (sum === 21) {
               message = "You've won!"
               blackjack = true
            } 

               else {
                message = "You're out of the game!"
                alive = false
              } 
 
                messageEl.textContent = message
          }
    
function newcard() {
    
    if (blackjack === false && alive === true) {
    console.log("Drawing card from deck!")
    let othercard = getcard()
    sum += othercard
    cards.push(othercard)
    console.log(cards)
    render()
    }
}

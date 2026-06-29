// BLACKJACK GAME 😉✌️



// OUR VALUES

let firstCard = Math.floor(Math.random() * 10) + 2;
let secondCard = Math.floor(Math.random() * 10) + 2;
let cardsEl = document.getElementById("cards-el")

let sum = firstCard + secondCard;
let sumEL= document.getElementById("sum-el")

let hasBlackJack = false
let isAlive = false

let message =""
let messageEl = document.getElementById("message-el")



// START GAME BUTTON FUNCTION

function startgame(){

if (sum <= 20){
     message = "Do you want to draw a new card? 🙂"
    isAlive = true
}

else if( sum === 21){
  message = "Wohoo! You've got Blackjack! 🥳"
    isAlive = true
   hasBlackJack= true    
}

else{
     message = "You're out of the game! 😭"
}

cardsEl.textContent = `Cards: ${firstCard}, ${secondCard}` 
sumEL.textContent = `Sum: ${sum}`
console.log(`Still alive: ${isAlive}`);
console.log(`has Black Jack: ${hasBlackJack}`);
 
messageEl.innerHTML = message

}


// NEW CARD BUTTON FUNCTION

function newCard(){
    let newCards = Math.floor(Math.random() * 10)+ 2
    sum = sum + newCards;
startgame()
}







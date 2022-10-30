// the object dictionary list will be created that contains what the player needs
let player = {
    name: 'Guest',
    chip: 200,
    extraChip: 10
}  
let newCardChip = player.chip;

//--------cards, sum and message will be initalized with empty squarebracket, zero, and string respectively
let cards = [];
let sum = 0;
let message = '';

let cardsEl = document.getElementById("cards_el");
let sumEl = document.getElementById("sum_el");
let messageEl = document.getElementById("message_el");
let playerEl = document.getElementById("player_el");

// the state of the game will be created to keep track of the game when the player is winning of losing
let hasBlackjack = false
let isAlive = false 


playerEl.textContent = player.name + ': $' + player.chip;


// Create a random card number function ,so that the player can get random cards to play with
// here we have to use the math method and if else statement
function getRandonCard() {
    let randomNumber = Math.floor(Math.random() * 13) + 1
    if(randomNumber > 10){
        return 10
    }else if(randomNumber === 1){
        return 11
    }else{
        return randomNumber
    }
}


//The onclick function name on the button for start game will be used to
// create a function that starts the game and allows you know when the player isAlive and displays random cards
// we are to display 2 random cards at first and another function will be create later to help generate new card when needed

function startGame() {
    isAlive = true
    let cardOne = getRandonCard()
    let cardTwo = getRandonCard()
    cards = [cardOne, cardTwo]
    sum = cardOne + cardTwo

    // we have to place the renderGame() inside the startGame() to help us make use of the
    // for loop by iterating the cards to be displayed
    renderGame()
}


// We have to create a function that will help us render the game with the display of the cards,
// using a for loop and if else statement to help compare the total value of the sum
// will allow the player keep playing to win or is out of the game and render the message to be displayed when the cards are played

function renderGame() {
    cardsEl.textContent = 'Cards: '
    for (let i = 0; i < cards.length; i++){
        cardsEl.textContent += cards[i] + ' '
    }

    sumEl.textContent = 'Sum: ' + sum

    if(sum <= 20){
        message = "Want a new card?"
    }else if(sum === 21){
        message = "You've got Blackjack!!!"
        // if have to keep the state of the player as true since they won
        hasBlackjack = true
    }else{
        message = "You're out of the game"
        // if have to keep the state of the player as false since they lost
        isAlive = false
    }

    messageEl.textContent = message
}


// The onclick function newGame() on the button will be created to generate ne card and deduct money fro the player
// with the use of an if else statemnet and logical operator and the push method to help include the new card to the cards array

function newGame() {
    if(isAlive === true && hasBlackjack === false){
        let newCard = getRandonCard()
        sum += newCard
        cards.push(newCard)
        newCardChip += - player.extraChip
        playerEl.textContent = player.name + ': $'+ newCardChip
        renderGame()
    }
}

let c=[];
let sum =0
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")
let cash=document.getElementById("money");
let PlayerCash={
    cash:145,
    name:"rajesh"
}

cash.textContent=PlayerCash.name+": "+PlayerCash.cash+"$";

function randomCard(){
    let x=Math.random()*13;
    x=Math.floor(x);
    if(x+1===1){
        return 11;
    }
    else if(x+1>10){
        return 10;
    }
    else{
        return x+1;
    }
}
function renderGame() {
    cardsEl.textContent = "Cards: " ;
    for(let i=0;i<c.length;i++){
        cardsEl.textContent+= " " + c[i];
    }
    sumEl.textContent = "Sum: " + sum
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "You've got Blackjack!"
        hasBlackJack = true
    } else {
        message = "You're out of the game!"
        isAlive = false
    }
    messageEl.textContent = message
}
function startGame(){
    isAlive=true;

    let firstCard = randomCard();
    let secondCard = randomCard();
    c.push(firstCard);
    c.push(secondCard);
    sum+=firstCard;
    sum+=secondCard;
    renderGame();
}
function newCard(){
    if(isAlive && !hasBlackJack){
    c.push(randomCard());
    sum+=randomCard();
    renderGame();
    }
}


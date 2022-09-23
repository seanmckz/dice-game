var player1 = Math.floor(Math.random() * 6) + 1;
var player2 = Math.floor(Math.random() * 6) + 1;

var imgSource1 = "images/dice" + player1 + ".png"
var imgSource2 = "images/dice" + player2 + ".png"

document.querySelector('#img1').setAttribute("src" , imgSource1);
document.querySelector('#img2').setAttribute("src" , imgSource2);

if (player1 > player2){
    document.querySelector("h1").innerHTML = "Player1 Wins"
    console.log("Player1 Wins");
}   else if (player2 > player1){
    document.querySelector("h1").innerHTML = "Player2 Wins"
    console.log("Player2 Wins");
}   else {
    document.querySelector("h1").innerHTML = "Draw"
    console.log("Draw");
}

function startGame(){
    var randomNum1 = ((Math.floor(Math.random()*6)) +1);    //eandom num 1-6
    var path = "images/dice" + randomNum1 + ".png";
    document.querySelector(".img1").setAttribute("src", path);


    //setting random dice for the 2nd player
    var randomNum2 = ((Math.floor(Math.random()*6)) +1); 
    path = "images/dice" + randomNum2 + ".png";
    document.querySelector(".img2").setAttribute("src", path);



    //changing h1 header to announce a winner or if there is a draw
    var h1 = document.querySelector("h1");

    if(randomNum1 > randomNum2) h1.innerHTML = "<img class='prize' src='images/prize.png'> Player 1 won!";
    else if (randomNum1 < randomNum2) h1.innerHTML = "Player 2 won! <img class='prize' src='images/prize.png'> ";
    else h1.innerHTML = "<img class='prize' src='images/draw.png'> Draw! <img class='prize' src='images/draw.png'>";
}


startGame();
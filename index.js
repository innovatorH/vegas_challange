var randomNum1 = Math.floor(Math.random() * 6) + 1;

var randomDiceImage = "dice" + randomNum1 +".png";

var randomImageSource = "images/" + randomDiceImage;

var image1 = document.querySelectorAll("img")[0].setAttribute("src", randomImageSource);

// console.log(randomNum1);

var randomNum2 = Math.floor(Math.random() * 6) + 1;

var randomDiceImage2 = "dice" + randomNum2 + ".png";

var randomImageSource2 = "images/" + randomDiceImage2;

var image2 = document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);



if(randomNum1 > randomNum2){
    
    document.querySelector("#winner").innerHTML = "congra! player 1 wins";

} else if(randomNum1 < randomNum2){

    document.querySelector("#winner").innerHTML = "congra! player 2 wins";

} else {

    document.querySelector("#winner").innerHTML="Draw!";
}

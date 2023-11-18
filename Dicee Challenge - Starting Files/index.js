var randonNumber= Math.floor(Math.random()*6)+1;
var randomImage = "images/dice"+randonNumber+".png";
var image1=document.querySelectorAll("img")[0]
image1.setAttribute('src',randomImage);

//image-2
 var randomNumber2=Math.floor(Math.random() * 6)+1;
 var randomImage2="images/dice"+randomNumber2+".png";
 var image2=document.querySelectorAll("img")[1]
 image2.setAttribute('src',randomImage2);

 if(randonNumber>randomNumber2){
    document.querySelector("h1").innerHTML="Player 1 Wins!"
 }
 else if (randomNumber2>randonNumber){
    document.querySelector("h1").innerHTML="Player 2 Wins!"
 }
 else{
    document.querySelector("h1").innerHTML="Draw!"
 }
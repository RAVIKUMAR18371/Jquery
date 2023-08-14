document.querySelector("h1").style.color = "black";
document.querySelector("h2").style.color = "red";
document.querySelector("soa").style.text = "center";
 var randomNumber1 = Math.random();
   randomNumber1 = randomNumber1 * 6
   randomNumber1 = Math.floor(randomNumber1) + 1;
 
var randomdiceImage = "dice" + randomNumber1 + ".png"; 
alert(randomdiceImage);
var randomImagesource = "C:\Users\ravik\OneDrive\Pictures\Desktop\Dicee Challenge - Completed_2nd\Dicee Challenge - Completed\images\" + randomdiceImage;

var Image1 = document.querySelectorAll("img")[0].setAttribute("src" ,  randomImagesource);
 

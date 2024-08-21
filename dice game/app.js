function r() {
    return Math.floor(Math.random()*6)+1;
}

var x=[0,0];
while(x[0]===x[1]){
    x[0]=r();
    x[1]=r();
}
var g="/dice game/pics/dice"+x[0]+".png";
var b="/dice game/pics/dice"+x[1]+".png";

if(x[0]>=x[1]){
    document.querySelector("h1").innerHTML="player 1 won";
    document.querySelector(".img1").src=g;
    document.querySelector(".img2").src=b;
}else{
    document.querySelector("h1").innerHTML="player 2 won";
    document.querySelector(".img2").src=b;
    document.querySelector(".img1").src=g;
}
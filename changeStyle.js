var clock = document.getElementById("clock");
var blueStyle = document.getElementById("styleChange");
var normStyle = document.getElementById("styleChange1");

blueStyle.onclick = function(){
    clock.style.backgroundImage = 'url("clocky.jpg")';
}

normStyle.onclick = function(){
    clock.style.backgroundImage = 'url("clock.png")';
}
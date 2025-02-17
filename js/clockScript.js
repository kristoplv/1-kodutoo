function moveLegs(){
    var canvas = document.getElementById("bg");
    const today = new Date();
    let s = today.getSeconds();
    let m = today.getMinutes();
    let h = today.getHours();
    let secDeg = 6 * s;
    let minDeg = (6 * m) + (s*0.1);
    let hrDeg = function(){
        if(h<=12){
            return (h-12)*30;
        } else {
            return h*30;
        }
    }
    if(h>20 || h<7){
        canvas.style.backgroundImage = 'url("/pictures/night_pic.png")';
    }
    console.log(h);

    var secondLeg = document.getElementById("firstLeg");
    var hourLeg = document.getElementById("secondLeg");
    var minuteLeg = document.getElementById("thirdLeg");
    secondLeg.style.transform = "rotate("+secDeg+"deg)";
    minuteLeg.style.transform = "rotate("+minDeg+"deg)";
    hourLeg.style.transform = "rotate("+hrDeg()+"deg)";
    setTimeout(moveLegs, 1000);
}
function tellTime(){
    const today = new Date();
    let s = today.getSeconds();
    let m = today.getMinutes();
    let h = today.getHours();
    let month = today.getMonth() + 1;
    let year = today.getFullYear();
    let day = today.getDate();
    const zone = Intl.DateTimeFormat().resolvedOptions().timeZone;

    let showTime = document.getElementById("time_here");
    let showDay = document.getElementById("date_here");
    showDay.innerHTML = "<p1 id='text'>"+day+"."+month+"."+year+"</p1>";
    showTime.innerHTML = "<p1 id='text'>"+ h+ " : "+ m+" : "+s+"  ... </p1><br><p1 id='text'>"+zone+"</p1>";
    setTimeout(tellTime, 1000);
}

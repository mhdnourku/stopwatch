var msecounds= 0;
var secounds= 0;
var minute= 0;
var outputmsecounds= document.getElementById("msecounds");
var outputsecounds= document.getElementById("secounds");
var outputminute= document.getElementById("minute");
var buttonstart=document.getElementById("btn-start")
var buttonstop=document.getElementById("btn-stop")
var buttonreset=document.getElementById("btn-reset")
var Interval;



buttonstart.addEventListener("click",()=>{
    clearInterval(Interval);
    Interval=setInterval(startTime,10)
})

buttonstop.addEventListener("click",()=>{
    clearInterval(Interval);
})

buttonreset.addEventListener("click",()=>{
    clearInterval(Interval);
    msecounds="00"
    secounds="00"
    minute="00"
    outputmsecounds.innerHTML=msecounds;
    outputminute.innerHTML=minute;
    outputsecounds.innerHTML=secounds;
})
function startTime(){
    msecounds++;
    if(msecounds <= 9){
        outputmsecounds.innerHTML="0"+msecounds;
    }

    if(msecounds > 9){
        outputmsecounds.innerHTML=msecounds;
    }
    if(msecounds > 99){
        secounds++;
        outputsecounds.innerHTML="0"+secounds;
        msecounds=0;
        outputmsecounds.innerHTML="0"+msecounds;
    }

    if(secounds > 9){
        outputsecounds.innerHTML=secounds;
    }


    if(secounds > 60){
        minute++;
        outputminute.innerHTML="0"+minute;
        secounds=0;
        outputsecounds.innerHTML=secounds;
    }
    if(minute > 9){
        outputminute.innerHTML=minute;
    }
}
let h=document.querySelector("#hrs");
let m=document.querySelector("#min");
let s=document.querySelector("#sec");
[hrs , min , sec]=[0,0,0];
let time=null;

function stopwatch(){
    sec++;
    if(sec==60){
    sec=0;
    min++;
    if(min==60){
        min=0;
        hrs++;
    }
   }
   h.innerHTML=(hrs>=10)?hrs:'0'+hrs;
   m.innerHTML=(min>=10)?min:'0'+min;
   s.innerHTML=(sec>=10)?sec:'0'+sec;
   timer();
}

function timer(){
    if(time!==null){
        clearInterval(time);
    }
    time=setInterval(stopwatch,1000);
}

function reload(){
    clearInterval(time);
    time=null;
    playicon.classList.replace("fa-pause","fa-play");
    [hrs,min,sec]=[0,0,0];
    h.innerHTML=`00`;
    m.innerHTML=`00`;
    s.innerHTML=`00`;
}

function stop(){
    clearInterval(time);
    time=null;
}

let playpause = document.querySelector("#playpause");
let playicon = playpause.querySelector("i");

playpause.addEventListener(("click"),()=>{
   if(time==null){
      stopwatch();
      playicon.classList.replace("fa-play","fa-pause");
   }else {
      stop();
      playicon.classList.replace("fa-pause","fa-play");
   }
})
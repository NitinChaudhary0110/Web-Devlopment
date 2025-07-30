let gameSeq = [];
let userSeq = [];

let btn =["red","yellow","green","purple"];

let started = false;
let level = 0;

let h2=document.querySelector("h2");

document.addEventListener("keypress",function(){
    if(started == false){
        started = true;
        console.log("game is started");
        levelUp();
    }
    
    
})

function gameFlash(btn){
    btn.classList.add("flash");

    setTimeout(function(){
        btn.classList.remove("flash");
    },250);

}


function userFlash(btn){
    btn.classList.add("userflash");

    setTimeout(function(){
        btn.classList.remove("userflash");
    },250);

}


function levelUp(){
    userSeq=[];
    level ++;

    h2.innerText=`level ${level}`;
//  Random btn choose
    let randomIdx=Math.floor(Math.random()*3);
    let rancolor=btn[randomIdx];
    let randombtn=document.querySelector(`.${rancolor}`);
    // console.log(randomIdx);
    // console.log(rancolor);
    // console.log(randombtn);
    gameSeq.push(rancolor);
    console.log(gameSeq);
    gameFlash(randombtn);

}

function checkAns(idx){

    if(userSeq[idx]===gameSeq[idx]){
        if(userSeq.length==gameSeq.length){
            setTimeout(levelUp,1000);
        }
    }else{
          h2.innerHTML =`Game over ! Your score was <b> ${level}</b> <br> Press any key to start !`;
          document.querySelector("body").style.backgroundColor="red";
          setTimeout(function(){
          document.querySelector("body").style.backgroundColor="white";

          },150);
          
          reset();
      
    }
}

function btnpress(){
    // console.log(this);
    let btn=this;
    userFlash(btn);
    userColor=btn.getAttribute("id");
    userSeq.push(userColor);

    checkAns(userSeq.length-1);

}


let allbtns=document.querySelectorAll(".btn");

for(Allbtns of allbtns){
    Allbtns.addEventListener("click",btnpress);
}

function reset(){
    started=false;
    gameSeq=[];
    userSeq=[];
    level=0;
}
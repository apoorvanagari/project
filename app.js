let gameSeq = [];
let userSeq = [];
let start = false;
let level = 0;
let h4 = document.querySelector("h4");
let allbtn = document.querySelectorAll(".box");
let highS = 0;

let colors = ["yellow","red","purple","green"];

document.addEventListener("keydown",function(event){
    if(start == false){
        console.log("Game has started");
        start = true;
        levelUp();
    }
});

function levelUp(){
        userSeq=[];
        level++;
        h4.innerText = `Level ${level}`;

        let randIdx = Math.floor(Math.random() * 4);
        let randCol = colors[randIdx];
        gameSeq.push(randCol);
        console.log(gameSeq);
        let randBtn = document.querySelector(`.${randCol}`);
        btnFlash(randBtn);
}
function checkAns(idx){
    if(userSeq[idx]===gameSeq[idx]){
       if(userSeq.length==gameSeq.length){
        setTimeout(levelUp,1000);
       }
    }else{
        if(highS < level-1) { 
            highS = level - 1;
        h4.innerHTML = `Game over! You created highest score of <b>${highS}<b> !!
        <br>Press any key to start the game.`;
        } else{
            h4.innerHTML = `Game over! Your score is <b>${level-1}<b><br>
            The highest score is ${highS}.
        <br>Press any key to start the game.`;
        }
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="";
        },250);
        reset();
    }
}

function btnFlash(tn){
     tn.classList.add("flash");
    setTimeout(function(){
        tn.classList.remove("flash");
    }, 250);
}

function btnPress(){
    if(start) {
        let btn = this;
        btnFlash(btn);
    
        userCol = btn.getAttribute("id");
        userSeq.push(userCol);
        console.log(userSeq);
    
        checkAns(userSeq.length-1);
    }
    
}

for(btn of allbtn){
   btn.addEventListener("click",btnPress)
}

function reset(){
    start = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}
let boxes=document.querySelectorAll(".box");
let turn0=true;
let msg=document.querySelector(".msg");
let msgContainer=document.querySelector(".msgContainer");
let newGameButton=document.querySelector(".newGameButton");
let resetButton=document.querySelector("#resetButton");
let count=0;
let flag=false;

const winningPatterns=[
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];



boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if (turn0){
            box.innerText="0";
            turn0=false;
            
        }
        else{
            box.innerText="X";
            turn0=true;
        
        }
        
        box.disabled=true;
        count++;
        // console.log(count);
        // console.log(flag);
        checkWinner();

        if (count===9 && flag==false){
            gameDraw();
        }

    })
})

let checkWinner=()=>{
    for (let pattern of winningPatterns){
        // console.log(pattern[0],pattern[1],pattern[2]);
        let posVal1=boxes[pattern[0]].innerText;
        let posVal2=boxes[pattern[1]].innerText;
        let posVal3=boxes[pattern[2]].innerText;
        // console.log(posVal1,posVal2,posVal3);
        

        if (posVal1!="" && posVal2!="" && posVal3!=""){
            if (posVal1==posVal2 && posVal2==posVal3){
                
                showWinner(posVal1);
                disableBoxes();
                flag=true;
            }
        }
    }

}

const disableBoxes=()=>{
    for (let box of boxes){
        box.disabled=true;
    }
}

const enableBoxes=()=>{
    for (let box of boxes){
        box.innerText="";
        box.disabled=false;
    }
}

const showWinner=(winner)=>{
    msg.innerText=`Congratulations, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
}


const resetGame=()=>{
    turn0=true;
    count=0;
    msgContainer.classList.add("hide");
    enableBoxes();
};


newGameButton.addEventListener("click",resetGame);
resetButton.addEventListener("click",resetGame);

const gameDraw=()=>{
    msg.innerText="Game is Draw, Click on New Game";
    msgContainer.classList.remove("hide");
    disableBoxes();
}
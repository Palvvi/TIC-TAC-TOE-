document.body.classList.remove('bg-image');
let buttons=document.querySelectorAll(".box");
let msg=document.querySelector("#winner");
let msgContainer=document.querySelector(".msgContainer");
let newGame=document.querySelector("#newgame");
let resetGame=document.querySelector("#resetGame");
let isTurn="true";
let winningPatterns=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
];
let count=0;
buttons.forEach(eachButton => {
    eachButton.addEventListener("click",()=>{
    if(isTurn=="ture")
    {
        eachButton.innerText="O";
        eachButton.style.color="#ADD9F4";
        isTurn="false";
    }
    else{
        eachButton.innerText="X"
        eachButton.style.color="#DDAE7E";
        isTurn="ture";
    }
     count++;
     eachButton.disabled=true;
    checkWinner();
})
});
function checkWinner()
{
    for (let pattern of winningPatterns)
    {
        let pos1=buttons[pattern[0]].innerText;
        let pos2=buttons[pattern[1]].innerText;
        let pos3=buttons[pattern[2]].innerText;
        setTimeout(() => {
            if(pos1!==""&& pos2!==""&& pos3!=="")
                {
                    if(pos1==pos2 && pos2==pos3)
                    {
                        document.body.classList.add('bg-image');
                        msg.innerText=`Congratulations!\n The Winner is ${pos1}`;
                        msgContainer.classList.remove("hide");
                        disableButtons();
                    }
                    else
                    {
                        if(count>=9)
                        {
                            msg.innerText=`Game is draw, no one is winner! Start a new game`;
                            msgContainer.classList.remove("hide");
                            disableButtons();
                            count=0;
                        }
                   }
                }   
        }, 300);
        
    }
}

function disableButtons()
{
    for(let button of buttons)
    {
        button.disabled=true;
    }
    
}

newGame.addEventListener("click",()=>{
    isTurn="ture";
    count=0;
    msgContainer.classList.add("hide");
    document.body.classList.remove('bg-image');
    for(button of buttons)
    {
        button.innerText=""; 
        button.disabled=false;
    }
}
)

resetGame.addEventListener("click",()=>{
    isTurn="ture";
    count=0;
    document.body.classList.remove('bg-image');
   for(button of buttons)
    {
        button.innerText=""; 
        button.disabled=false;
    }
}
)

  let boxes= document.querySelectorAll(".box");
  let resetBtn= document.querySelector("#reset-btn");
  let newGameBtn= document.querySelector("#newGame-btn");
  let resultContainer= document.querySelector(".result-container");
  let showResult= document.querySelector(".show-result");




   turnNum = true; // it's show the player turn(number)/

const winningPoint=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],                    
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];
 boxes.forEach((box) =>{
 box.addEventListener("click", ()=>{
   if(turnNum === true) {
    box.innerText="0";
    turnNum= false;
   }
   else{
    box.innerText="x";
    turnNum=true;
   }
    box.disabled=true;
    checkWinner();
 })
});

let resetGame = ()=>{
 turnNum="true";
enableBtn();
resultContainer.classList.add("hide");
};


let showWinner=(winner)=>{
  showResult.innerHTML=" The winner is "+ winner;
  resultContainer.classList.remove("hide");
  disableBtn();
};

let disableBtn=()=>{
  for(let box of boxes){
   box.disabled=true;
  }
}
let enableBtn=()=>{
  for(let box of boxes){
    box.disabled=false;
    box.innerHTML="";
  }
}

 
let checkWinner = ()=>{
  for(value of winningPoint){
    let pos1Val=boxes[value[0]].innerHTML;
    let pos2Val=boxes[value[1]].innerHTML;
    let pos3Val=boxes[value[2]].innerHTML;

   if(pos1Val !== "" && pos2Val !=="" && pos3Val !==""){
    if(pos1Val === pos2Val && pos2Val === pos3Val){
      console.log("the winner is " + pos1Val);
      showWinner(pos1Val);
    }
  }
  
  }
}
newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame)





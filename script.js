// selections: 
const btns = document.querySelectorAll('button');
const output = document.querySelector('.output');
const message = document.querySelector('.message');


for(let i = 0; i<=btns.length-1; i++){
    btns[i].addEventListener("click", ()=>performToss(btns[i]))
}


let userScore = 0;
let computerScore = 0;
function performToss(btnClicked){
    console.log("Button clicked", btnClicked);
    let selectedValue = btnClicked.innerText; // "Head" or "Tail

    let choices = ["head", "tail"];
    let randomIndex = parseInt(Math.random()*choices.length);// 0,1
    let tossValue = choices[randomIndex];

    console.log("Selected Value", selectedValue, "Toss Value", tossValue);

    if(tossValue == selectedValue.toLowerCase()){
        userScore = userScore + 1;
        
        
    }
    else{
        computerScore = computerScore + 1;
        
    }

    output.innerHTML = `
    User Score: ${userScore} 
    <br>
    Computer Score: ${computerScore}`
   
}








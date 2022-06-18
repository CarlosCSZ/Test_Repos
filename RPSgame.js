var inputValue = document.getElementById("InputValue");
var player = inputValue;
var rps = ['rock', 'paper', 'scissor'];
var rindex = Math.floor(Math.random(0,2));
var cpuValue = rps[rindex];


function RPSgame (player, cpuValue) {
    if (player === "rock" && cpuValue === "scissor") {
        const OutCome = document.getElementById("outCome");
        OutCome.innerText = "You have won with " + player;
    } else {
        if (player === "paper" && cpuValue === "rock") {
            const OutCome = document.getElementById("outCome");
            OutCome.innerText = "You have won with " + player;
    } else {
        if (player === "scissor" && cpuValue === "paper") {
            const OutCome = document.getElementById("outCome");
            OutCome.innerText = "You have won with " + player;
    } else {
        if (player === cpuValue) {
            const OutCome = document.getElementById("outCome");
            OutCome.innerText = "It is a match";
    } else {const OutCome = document.getElementById("outCome");
    OutCome.innerText = "CPU has won with "+ cpuValue}

}}}};
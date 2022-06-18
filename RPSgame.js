function game() {
    const inputValue = document.getElementById("InputValue").value;
    const player = inputValue;
    let rps = ['rock', 'paper', 'scissor'];
    let rindex = Math.floor(Math.random() * 3);
    let cpuValue = rps[rindex];
    console.log(cpuValue);
    console.log(player);

    if (player === "rock" && cpuValue === "scissor") {
        const OutCome = document.getElementById("outCome");
        OutCome.innerText = "You have won with " + player;
    } 
    else if (player === "paper" && cpuValue === "rock") {
        const OutCome = document.getElementById("outCome");
        OutCome.innerText = "You have won with " + player;
    }
    else if (player === "scissor" && cpuValue === "paper") {
        const OutCome = document.getElementById("outCome");
        OutCome.innerText = "You have won with " + player;
    }
    else if (player === cpuValue){
        const OutCome = document.getElementById("outCome");
        OutCome.innerText = "It is a match";
    } 
    else {const OutCome = document.getElementById("outCome");
    OutCome.innerText = "CPU has won with "+ cpuValue}
};

const button = document.getElementById('actionButton')
button.addEventListener('click', game());
let mineButton = document.getElementById("mineButton");
let fuelCount  = document.getElementById("fuelCount");
let botCount   = document.getElementById("botCount");
let buyBots    = document.getElementById("buyBots");

let fuel = 0;

let bots = 0;
let botCost = 32;

function updateTexts() {
    fuelCount.innerText = "You have mined " + fuel + "TJf (terajoules of fossil fuels).";
    botCount.innerText = "You have " + bots + " miner_bot(s) mining " + bots + "TJf/sec."
}

function clickFuelmine() {
    fuel++;
    updateTexts();
}

function buyBot() {
    if (fuel >= botCost) {
        fuel -= botCost;
        bots++;
        botCost *= 1.5;

        updateTexts();
        buyBots.innerText = "Buy a miner_bot for " + botCost + "TJf";
    }
}

setInterval(function() {
    fuel += bots;
    updateTexts();
}, 1000)

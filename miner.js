let mineButton    = document.getElementById("mineButton");
let fuelCount     = document.getElementById("fuelCount");
let botCount      = document.getElementById("botCount");
let buyBots       = document.getElementById("buyBots");
let drillLevel    = document.getElementById("drillLevel");
let upgradeDrills = document.getElementById("upgradeDrills");

let fuel = 0;
let mineSpeed = 1;
let drillCost = 32;

let bots = 0;
let botCost = 32;

let round = (n) => {return Math.round(n*10)/10};

function updateTexts() {
  fuelCount.innerText  = `You have mined ${round(fuel)} TJf (terajoules of fossil fuels).`;
  botCount.innerText   = `You have ${round(bots)} other worker bot${bots!=1?"s":""} mining ${round(bots*mineSpeed)}TJf/sec.`;
  drillLevel.innerText = `Your drills currently mine ${round(mineSpeed)}TJf per hit`;
  buyBots.innerText = `build a helper worker bot for ${round(botCost)}TJf`;
  upgradeDrills.innerText = `Upgrade all drills for ${round(drillCost)}TJf`
}

function clickFuelmine() {
  fuel += mineSpeed;
  updateTexts();
}

function buyBot() {
  if (fuel >= botCost) {
    fuel -= botCost;
    bots++;

    botCost *= 1.25;

    setInterval(function() {
      fuel += mineSpeed;
      updateTexts();
    }, 1000)

    updateTexts();
  }
}

function upgradeDrill() {
  if (fuel >= drillCost) {
    fuel -= drillCost;
    mineSpeed *= 1.1;

    drillCost *= 1.5;

    updateTexts();
  }
}
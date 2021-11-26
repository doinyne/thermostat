const readlineSync = require("readline-sync");
const Thermostat = require("./thermostat.js");

const thermostat = new Thermostat();
console.log(`Temperature is ${thermostat.getTemperature()}`)

while (true) {
  let userInput = readlineSync.prompt();
  switch(userInput) {
    case 'up':
      thermostat.up();
      break;
    case 'down':
      thermostat.down();
      break;
    case 'psm on':
      thermostat.setPowerSavingMode(true);
      break;
    case 'psm off':
      thermostat.setPowerSavingMode(false);
      break;
  }
  if (thermostat.powersavingmode === true && thermostat.temperature >= 25) {
    console.log(`Temperature is ${thermostat.getTemperature()} (maximum reached)`);
  } else if (thermostat.powersavingmode === false && thermostat.temperature >= 32) {
    console.log(`Temperature is ${thermostat.getTemperature()} (maximum reached)`);
  } else {
    console.log(`Temperature is ${thermostat.getTemperature()}`);
  }
}






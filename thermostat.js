class Thermostat {
  constructor() {
    this.temperature = 20;
    this.powersavingmode = true;
  }
  getTemperature() {
    return this.temperature;
  }
  up() {
    if (this.powersavingmode === true && this.temperature >= 25) {
      return this.temperature = 25;
    } else if (this.powersavingmode === false && this.temperature >= 32) {
      return this.temperature = 32;
    } else {
      return this.temperature += 1;
    }
  }
  down() {
    if (this.temperature > 10) {
      return this.temperature -= 1;
    } else {
      return this.temperature;
    }
  }
  reset() {
    return this.temperature = 20;
  }
  setPowerSavingMode(mode) {
    if (mode === true) {
      return this.powersavingmode = true;
    } else if (mode === false) {
      return this.powersavingmode = false;
    } else {
      return this.powersavingmode;
    }
  }
  energyUsage() {
    if (this.temperature < 18) {
      return 'Low';
    } else if (this.temperature > 25) {
      return 'High';
    } else {
      return 'Medium';
    }
  }
}

module.exports = Thermostat;


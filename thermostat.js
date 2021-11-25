// up and down methods only implements once to 20

class Thermostat {
  constructor() {
    this.temperature = 20;
  }
  getTemperature() {
    return this.temperature;
  }
  up() {
    return this.temperature + 1;
  }
  down() {
    return this.temperature - 1;
  }
}

module.exports = Thermostat;
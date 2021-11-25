const Thermostat = require('./thermostat');

describe('Thermostat class', () => {
  it('return the temperature', () => {
    const thermostat = new Thermostat();
    expect(thermostat.getTemperature()).toEqual(20);
  });
  it('Increases temperature by 3', () => {
    const thermostat = new Thermostat();
    thermostat.up()
    thermostat.up()
    thermostat.up()
    expect(thermostat.getTemperature()).toBeGreaterThan(22);
  });
  it('decreases temperature by 3', () => {
    const thermostat = new Thermostat();
    thermostat.down()
    thermostat.down()
    thermostat.down()
    expect(thermostat.getTemperature()).toBeLessThan(18);
  });
});

const Thermostat = require('./thermostat');

describe('Thermostat class', () => {
  it('returns the temperature', () => {
    const thermostat = new Thermostat();
    expect(thermostat.getTemperature()).toEqual(20);
  });
  it('Increases temperature by 3', () => {
    const thermostat = new Thermostat();
    thermostat.up();
    thermostat.up();
    thermostat.up();
    expect(thermostat.getTemperature()).toBeGreaterThan(22);
  });
  it('decreases temperature by 3', () => {
    const thermostat = new Thermostat();
    thermostat.down();
    thermostat.down();
    thermostat.down();
    expect(thermostat.getTemperature()).toBeLessThan(18);
  });
  it('has a minimum temperature of 10', () => {
    const thermostat = new Thermostat();
    thermostat.down(); // 19
    thermostat.down(); // 18
    thermostat.down(); // 17
    thermostat.down(); // 16
    thermostat.down(); // 15
    thermostat.down(); // 14
    thermostat.down(); // 13
    thermostat.down(); // 12
    thermostat.down(); // 11
    thermostat.down(); // 10
    thermostat.down(); // 10
    thermostat.down(); // 10
    expect(thermostat.getTemperature()).toEqual(10);
  })
  it('resets the temperature to 20', () => {
    const thermostat = new Thermostat();
    thermostat.up();
    thermostat.up();
    thermostat.up();
    thermostat.reset();
    expect(thermostat.getTemperature()).toEqual(20);
  });
  it('has power saving mode on by default', () => {
    const thermostat = new Thermostat();
    expect(thermostat.powersavingmode).toEqual(true);
  });
  it('turns power saving mode off', () => {
    const thermostat = new Thermostat();
    thermostat.setPowerSavingMode(false);
    expect(thermostat.powersavingmode).toEqual(false);
  })
  it('turns power saving mode on', () => {
    const thermostat = new Thermostat();
    thermostat.setPowerSavingMode(false);
    thermostat.setPowerSavingMode(true);
    expect(thermostat.powersavingmode).toEqual(true);
  })
  it('has a maxium temperature of 25 if power saving mode is on', () => {
    const thermostat = new Thermostat();
    thermostat.up(); // 21
    thermostat.up(); // 22
    thermostat.up(); // 23
    thermostat.up(); // 24
    thermostat.up(); // 25
    thermostat.up(); // 25
    thermostat.up(); // 25
    expect(thermostat.getTemperature()).toEqual(25);
  });
  it('has a maxium temperature of 32 if power saving mode is off', () => {
    const thermostat = new Thermostat();
    thermostat.setPowerSavingMode(false);
    thermostat.up(); // 21
    thermostat.up(); // 22
    thermostat.up(); // 23
    thermostat.up(); // 24
    thermostat.up(); // 25
    thermostat.up(); // 26
    thermostat.up(); // 27
    thermostat.up(); // 28
    thermostat.up(); // 29
    thermostat.up(); // 30
    thermostat.up(); // 31
    thermostat.up(); // 32
    thermostat.up(); // 32
    thermostat.up(); // 32
    expect(thermostat.getTemperature()).toEqual(32);
  });
  it('returns low for current energy usage if temperature is less than 18', () => {
    const thermostat = new Thermostat();
    thermostat.down();
    thermostat.down();
    thermostat.down(); // 17
    expect(thermostat.energyUsage()).toEqual('Low');
  });
  it('returns medium for current energy usage if temperature is between 18 and 25', () => {
    const thermostat = new Thermostat();
    expect(thermostat.energyUsage()).toEqual('Medium');
  });
  it('returns high for current energy usage if temperature is higher than 25', () => {
    const thermostat = new Thermostat();
    thermostat.setPowerSavingMode(false);
    thermostat.up();
    thermostat.up();
    thermostat.up();
    thermostat.up();
    thermostat.up();
    thermostat.up(); // 26
    expect(thermostat.energyUsage()).toEqual('High');
  });
});

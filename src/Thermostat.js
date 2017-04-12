'use strict';

function Thermostat(temp=INITIAL_TEMP) {
  this.temp = temp
  this.min = MIN_TEMP
  this.max = SAVING_MAX
}

const INITIAL_TEMP = 20
const MIN_TEMP = 10
const SAVING_MAX = 25
const NON_SAVING_MAX = 32

Thermostat.prototype.increase = function() {
  this.temp += 1
};

Thermostat.prototype.decrease = function() {
 this.temp -= 1
};

Thermostat.prototype.switchSavingMode = function() {
  this.max === SAVING_MAX ? this.max = NON_SAVING_MAX : this.max = SAVING_MAX
}

Thermostat.prototype.reset = function(){
  this.temp = 20
}

Thermostat.prototype.usage = function() {
  if (this.temp < 18) {
    return 'low-usage'
  }
  else if (this.temp < 25) {
    return 'medium-usage'
  }
  return 'high-usage'
}

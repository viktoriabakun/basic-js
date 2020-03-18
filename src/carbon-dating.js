const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
 let k = 0.693 / HALF_LIFE_PERIOD;
 let t = Math.ceil((Math.log(MODERN_ACTIVITY / parseFloat(sampleActivity))) / k);

  if (typeof sampleActivity == 'string' && parseFloat(sampleActivity) > 0 && parseFloat(sampleActivity) < MODERN_ACTIVITY) {
    return t;
  }
  else {
    return false;
  }
};

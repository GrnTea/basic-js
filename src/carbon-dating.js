
const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;


module.exports = function dateSample(sampleActivity) {
  
  if (!parseFloat(sampleActivity) || typeof(sampleActivity) !== 'string' || isNaN(parseFloat(sampleActivity)) || parseFloat(sampleActivity) < 0 || parseFloat(sampleActivity) > 15){
    return false;
  }
  return result = Math.ceil(Math.log(MODERN_ACTIVITY / parseFloat(sampleActivity)) / (0.693 / HALF_LIFE_PERIOD));
};
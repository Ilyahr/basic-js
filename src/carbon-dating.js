const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  if (typeof sampleActivity !== 'string' ||
      sampleActivity <= 0 ||
      sampleActivity > MODERN_ACTIVITY)
    return false;
  for (let i = 0; i < sampleActivity.length; i++)
    if (!(sampleActivity[i] >= 0 && sampleActivity[i] < 10) &&
        sampleActivity[i] !== '.')
      return false;

  return Math.ceil(Math.log(MODERN_ACTIVITY / parseFloat(sampleActivity)) / (Math.log(2).toFixed(3) / HALF_LIFE_PERIOD));
};

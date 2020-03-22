module.exports = function getSeason(date) {
  if (!arguments.length) return 'Unable to determine the time of year!';
  if (!Date.prototype.isPrototypeOf(date))
    throw new Error;

  for (item in date)
    throw new Error;

  switch (((date.getMonth() + 1) / 3 | 0) % 4) {
    case 0: return 'winter';
    case 1: return 'spring';
    case 2: return 'summer';
    case 3: return 'autumn';
  }
};

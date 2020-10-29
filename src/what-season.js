module.exports = function getSeason(date) {
  if (date == '' || date == null || isNaN(date.getTime())) {
    return 'Unable to determine the time of year!';
  }

  return ["winter", "spring", "summer", "autumn"][Math.floor((date.getMonth() + 1) % 12 / 3)];
  
};

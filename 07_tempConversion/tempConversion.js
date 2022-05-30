const ftoc = function(temp) {
  return parseFloat(
    Math.round(((temp - 32) * (5/9)) * 10) / 10
    .toFixed(1));
};

const ctof = function(temp) {
  return parseFloat(
    Math.round((temp * (9/5) + 32) * 10) / 10
    .toFixed(1));
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};

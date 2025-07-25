const convertToCelsius = function(tempInFht) {
    res = (tempInFht - 32) * (5/9);

    if (Math.trunc(res) == res)
        return Math.trunc(res);
    return parseFloat(res.toFixed(1));
};

const convertToFahrenheit = function(tempInClc) {
    res = tempInClc * (9/5) + 32;

    if (Math.trunc(res) == res)
        return Math.trunc(res);
    return parseFloat(res.toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
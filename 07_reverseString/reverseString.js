const reverseString = function(str) {
    if (str === " ") {
        return str;
    }

    strArr = str.split("").reverse();
    return strArr.join("");
};

// Do not edit below this line
module.exports = reverseString;

const repeatString = function(str, num) {
    if (num < 0) {
        return 'ERROR';
    }

    strArr = [];
    for (let i = 0; i < num; i++) {
        strArr.push(str);
    }
    return strArr.join("");
};

// Do not edit below this line
module.exports = repeatString;

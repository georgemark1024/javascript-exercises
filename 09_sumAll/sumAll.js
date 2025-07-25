const sumAll = function(a, b) {
    if (!Number.isInteger(a) || !Number.isInteger(b))
        return 'ERROR';
    if (a < 0 || b < 0)
        return 'ERROR';

    sum = 0;
    a > b ? [int1, int2] = [b, a] : [int1, int2] = [a, b];
    
    for (i = int1; i <= int2; i++)
        sum += i;
    
    return sum;
};

// Do not edit below this line
module.exports = sumAll;

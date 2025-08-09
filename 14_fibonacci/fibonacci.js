const fibonacci = function(num) {
    num = Number(num);

    if (num < 0)
        return "OOPS";
    
    let a = 0;
    let b = 1;
    let fibs = [];
    let next;
    for (let i = 0; i <= num; i++) {
        if (i == 0) {    
            next = a;
        }
        else if (i == 1) {
            next = b;
        }
        else {
            next = a + b;
            a = b;
            b = next;
        }
        fibs.push(next);
    }

    return fibs[num];
};

console.log(fibonacci(4));

// Do not edit below this line
module.exports = fibonacci;

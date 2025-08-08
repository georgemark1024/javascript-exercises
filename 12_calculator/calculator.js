const add = function(a, b) {
  return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(nums) {
  let sum = 0;
	for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
  }
  return sum;
};


const multiply = function(nums) {
  let res = 1;
  for (let i = 0; i < nums.length; i++) {
    res *= nums[i];
  }
  return res;
};

const power = function(a, b) {
  return a**b;
	
};

const factorial = function(a) {
  if (a == 1 || a == 0)
    return 1;

  let res = a * factorial(a - 1);

  return res;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};

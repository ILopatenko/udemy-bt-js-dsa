const calculator = (a, b, operator) => {
   if (operator !== '/' && operator !== '*' && operator !== '+' && operator !== '-')
      throw new Error('Invalid Operator');
   if (operator === '/') a / b;
   if (operator === '*') a * b;
   if (operator === '-') a - b;
   return a + b;
};

const result = calculator(3, 5, '*');
console.log(result);

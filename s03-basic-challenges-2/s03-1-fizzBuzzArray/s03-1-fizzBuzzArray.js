const fizzBuzz = () => {
   for (let i = 1; i < 101; i++) {
      let label = '';
      if (i % 3 === 0) label += 'Fizz';
      if (i % 5 === 0) label += 'Buzz';
      console.log(label === '' ? i : label);
   }
};

//fizzBuzz();

const fizzBuzzArray = () => {
   const arr = [];
   for (let i = 1; i < 101; i++) {
      let label = '';
      if (i % 3 === 0) label += 'Fizz';
      if (i % 5 === 0) label += 'Buzz';
      arr.push(label === '' ? i : label);
   }
   return arr;
};

const resault = fizzBuzzArray();
console.log(resault);

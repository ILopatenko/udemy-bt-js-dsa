const testArray = ['A', 'B', 'C', 'E'];

const findMissingLetter = arr => {
   if (arr.length < 2) return '';
   let min = arr[0].charCodeAt();
   let max = arr[0].charCodeAt();
   let sum = min;
   //console.log('Initial state', { min, max, sum });
   for (let i = 1; i < arr.length; i++) {
      const current = arr[i].charCodeAt();
      //console.log('\nIteration', { i, current });
      if (current > max) max = current;
      sum += current;

      //console.log({ min, max, sum });
   }
   //console.log({ min, max, sum, arr });
   let fullSum = ((min + max) * (arr.length + 1)) / 2;
   //console.log({ fullSum });
   const code = fullSum - sum;
   //console.log({ code });
   return String.fromCharCode(code);
};

const answer = findMissingLetter(testArray);
console.log(answer);

const testArray = [5, 4, 6, 2, 1, 7, 9, 8];

const missingNumber = arr => {
   if (!arr.length) return 1;
   let sumActual = 0;
   let sumTheory = arr.length + 1;
   for (let i = 0; i < arr.length; i++) {
      const current = arr[i];
      sumActual += current;
      sumTheory += i + 1;
   }
   return sumTheory - sumActual;
};

const answer = missingNumber(testArray);
console.log(answer);

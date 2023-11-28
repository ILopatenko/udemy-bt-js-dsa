const testArray = [6, 5, 4, 8, 9, 3, 6, 12, 41, 222, 569, 8444, 1222, 3333];

const findMax = arr => {
   let max = arr[0];
   for (let i = 1; i < arr.length; i++) {
      let current = arr[i];
      if (current > max) max = current;
   }
   return max;
};

const result = findMax(testArray);
console.log(result);

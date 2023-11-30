const testArray = [2, 2, 3, 3, 3, 2, 2, 2, 3, 3, 6, 5, 4, 3, 2, 10, 1, 12, 20, 19, 222];

const removeDuplicates = arr => {
   const hash = {};
   const filtered = [];
   for (let i = 0; i < arr.length; i++) {
      const current = arr[i];
      if (!hash[current]) {
         hash[current] = 1;
         filtered.push(current);
      }
   }
   return filtered;
};

const answer = removeDuplicates(testArray);
console.log(answer);

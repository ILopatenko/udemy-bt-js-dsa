const testArray1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const testArray2 = [11, 12, 13, 14, 15, 16, 8, 8, 8, 8, 8, 88, 8];

const arraysIntersection = (arr1, arr2) => {
   const makeHash = arr => {
      const hash = {};
      for (let i = 0; i < arr.length; i++) {
         const current = arr[i];
         if (!hash[current]) {
            hash[current] = 1;
         }
      }
      return hash;
   };

   const hash1 = makeHash(arr1);
   const hash2 = makeHash(arr2);
   const res = [];
   for (let element in hash1) {
      if (hash2[element]) {
         res.push(element);
      }
   }
   return res.length === 0 ? null : res;
};

const answer = arraysIntersection(testArray1, testArray2);
console.log(answer);

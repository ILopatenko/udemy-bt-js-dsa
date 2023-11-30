const testString = 'm123123    A  234&^*$%^%$Da!M';

const reverseString = str => {
   let res = '';
   for (let i = str.length - 1; i >= 0; i--) {
      res += str[i];
   }
   return res;
};

const result = reverseString(testString);
console.log(result);

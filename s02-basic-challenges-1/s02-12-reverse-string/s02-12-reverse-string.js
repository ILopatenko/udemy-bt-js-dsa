const testString = 'm123123    A  234&^*$%^%$Da!M';

const isPalindrome = str => {
   for (let i = 0; i <= str.length / 2 - 1; i++) {
      const left = str[i];
      const right = str[str.length - 1 - i];
      if (left !== right) return false;
   }
   return true;
};

const result = isPalindrome(testString);
//console.log(result);

const isPalindromeSkipNonLetter = str => {
   let leftIndex = 0;
   let rightIndex = str.length - 1;
   while (leftIndex <= rightIndex) {
      let left = str[leftIndex];
      let right = str[rightIndex];
      if (left.toLowerCase() === left.toUpperCase()) {
         leftIndex++;
         continue;
      }
      if (right.toLowerCase() === right.toUpperCase()) {
         rightIndex--;
         continue;
      }
      if (left.toLowerCase() !== right.toLowerCase()) return false;
      leftIndex++;
      rightIndex--;
   }
   return true;
};

const result2 = isPalindromeSkipNonLetter(testString);
//console.log(result2);

const isPalindromeCharAt = str => {
   const isLetter = symbol => {
      const code = symbol.charCodeAt(0);
      return (code >= 65 && code <= 90) || (code >= 97 && code <= 122);
   };

   let leftIndex = 0;
   let rightIndex = str.length - 1;
   while (leftIndex <= rightIndex) {
      let left = str[leftIndex];
      let right = str[rightIndex];
      if (!isLetter(left)) {
         leftIndex++;
         continue;
      }
      if (!isLetter(right)) {
         rightIndex--;
         continue;
      }
      if (left.toLowerCase() !== right.toLowerCase()) return false;
      leftIndex++;
      rightIndex--;
   }
   return true;
};

const result3 = isPalindromeCharAt(testString);
console.log(result3);

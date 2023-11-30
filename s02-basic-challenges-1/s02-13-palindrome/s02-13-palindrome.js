const testString = 'madam';

//palinfdrome_1 - just a palindrome. This functtion takes in a string and doesn't check if any symbol is letter on not
const isPalindrome_1 = str => {
   for (let i = 0; i <= str.length / 2 - 1; i++) {
      const left = str[i];
      const right = str[str.length - 1 - i];
      if (left !== right) return false;
   }
   return true;
};

const answer_1 = isPalindrome_1(testString);
//console.log(answer_1);

//palinfdrome_2 - skips all the symbols that aren't letters and l!==L (case sensitive solution)
const testString2 = 'm ! ada   %^&*()()m';
const isPalindrome_2 = str => {
   const isLetter = symbol => {
      const code = symbol.charCodeAt(0);
      return (code >= 65 && code <= 90) || (code >= 97 && code <= 122) ? true : false;
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
      if (left !== right) return false;
      leftIndex++;
      rightIndex--;
   }
   return true;
};

const answer_2 = isPalindrome_2(testString2);
//console.log(answer_2);

//palinfdrome_3 - skips all the symbols that aren't letters and l===L
const testString3 = 'm ! adA   %^&*(63~`54654)()M';
const isPalindrome_3 = str => {
   const isLetter = symbol => {
      const code = symbol.charCodeAt(0);
      return (code >= 65 && code <= 90) || (code >= 97 && code <= 122) ? true : false;
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

const answer_3 = isPalindrome_3(testString3);
console.log(answer_3);

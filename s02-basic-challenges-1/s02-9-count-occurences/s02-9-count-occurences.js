const countOccurences = (string, letter) => {
   let counter = 0;
   for (let i = 0; i < str.length; i++) {
      let current = string[i];
      if (current === letter) counter++;
   }
   return counter;
};

const str =
   'build better foundational skills as a developer by doing challenges and learning about data structures and algorithms';
const ltr = 'b';

const result = countOccurences(str, ltr);
console.log(result);

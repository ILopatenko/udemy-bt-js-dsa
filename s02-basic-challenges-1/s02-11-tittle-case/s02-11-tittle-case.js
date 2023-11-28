const testString =
   'build better foundational skills as a developer by doing challenges and learning about data structures and algorithms';

const tittleCase = str => {
   let result = str[0].toUpperCase();
   for (let i = 1; i < str.length; i++) {
      const current = str[i];
      const previous = str[i - 1];
      if (previous === ' ') {
         result += current.toUpperCase();
      } else result += current;
   }
   return result;
};

const result = tittleCase(testString);
console.log(result);

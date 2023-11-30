const testString =
   'build better foundational skills as a developer by doing challenges and learning about data structures and algorithms';

const countVowels = str => {
   const lowered = str.toLowerCase();
   let res = 0;
   for (let i = 0; i < lowered.length; i++) {
      const current = lowered[i];
      if (
         current === 'a' ||
         current === 'o' ||
         current === 'u' ||
         current === 'e' ||
         current === 'i'
      ) {
         res++;
      }
   }
   return res;
};

const answer = countVowels(testString);
console.log(`Initial string "${testString}" consists of ${answer} vowels`);

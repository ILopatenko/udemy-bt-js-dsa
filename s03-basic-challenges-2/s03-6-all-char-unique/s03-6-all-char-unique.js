const testString = 'abcdefgh';

const allCharUnique = str => {
   let hash = {};
   for (let i = 0; i < str.length; i++) {
      const current = str[i];
      if (!hash[current]) {
         hash[current] = 1;
      } else return false;
   }
   return true;
};

const answer = allCharUnique(testString);
//console.log(answer);

const allCharUniqueShort = str => {
   let hash = {};
   for (const letter of str) {
      console.log({ letter });
      if (hash[letter]) {
         return false;
      }
      hash[letter] = 1;

      //!hash[letter] ? (hash[letter] = 1) : false;
   }
   return true;
   //for (const letter in str) hash[letter] = (hash[letter] || 0) + 1;
};

const answer2 = allCharUniqueShort(testString);
console.log(answer2);

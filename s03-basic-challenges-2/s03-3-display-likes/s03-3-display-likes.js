const testArray = ['John', 'Peter', 'Carol', 'Megan'];

const displayLikes = arr => {
   if (arr.length === 0) {
      console.log(`no one likes this`);
   } else if (arr.length === 1) {
      console.log(`${arr[0]} likes this`);
   } else if (arr.length === 2) {
      console.log(`${arr[0]} and ${arr[1]} like this`);
   } else if (arr.length === 3) {
      console.log(`${arr[0]}, ${arr[1]} and ${arr[2]} like this`);
   } else {
      console.log(`${arr[0]}, ${arr[1]} and ${arr.length - 2} others like this`);
   }
};

displayLikes(testArray);

const diceGame = games => {
   let res = [];
   const getRandomDice = () => Math.floor(Math.random() * 6) + 1;

   for (let i = 1; i <= games; i++) {
      const dice1 = getRandomDice();
      const dice2 = getRandomDice();
      const sum = dice1 + dice2;
      let result = 'roll again';
      if (sum === 7 || sum === 11) result = 'win';
      if (sum === 2 || sum === 3 || sum === 12) result = 'lose';

      //result = sum === 7 || sum === 11 ? 'win' : 'lose';
      res.push({ dice1, dice2, sum, result });
   }
   return res;
};

const answer = diceGame(1000);
console.log(answer);

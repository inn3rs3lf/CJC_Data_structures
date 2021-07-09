const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// 1. Loop over the game.scored array and print each name to the console, along with the goal number. (example: 'Goal 1: Lewendowski')
for (const [i, player] of game.scored.entries()) {
  console.log(`Goal ${i + 1}: ${player}`);
}

// 2. Use a loop to calculate the average odd and log it to the console (Calculate averages basically)
oddValue = Object.values(game.odds);
oddTotal = 0;
for (let odd of oddValue) oddTotal += odd;
oddTotal /= oddValue.length;
console.log(oddTotal);

// 3. Print the 3 odds to the console, but in a nice formatted way, exactly like this:
//    Odd of victory for Bayern Munich: 1.33
//    Odd of a draw: 3.25
//    Odd of a victory for Borrussia Dortmund: 6.5
// Get the team names directly from teh game object, don't hardcode them except for "Draw"). HINT: Note how the odds and the game object have the same property names :)
for (const [team, odd] of Object.entries(game.odds)) {
  const { team1, team2 } = game;
  console.log(team1, team2);
  console.log(team, odd);
}

// BONUS: Create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as the value. In this game, it will look like this:
//        {
//            Granrby: 1,
//            Hummels: 1,
//             Lewandowski: 2
//          }

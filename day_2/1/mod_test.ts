const text = Deno.readTextFileSync('../input.txt');
const textByLine = text.split('\n');

let score = 0;

const scoring: Record<string, { score: number, wins: string, equal: string }> = {
  A: {
    score: 2,
    wins: "Y",
    equal: "X"
  },
  B: {
    score: 3,
    wins: "Z",
    equal: "Y"
  },
  C: {
    score: 1,
    wins: "X",
    equal: "Z"
  },
}

for (const game of textByLine) {
  const myChoice = game.split('')[2];
  const opponentChoice = game.split('')[0];

  const myScoring = scoring[opponentChoice];

  if (myScoring.wins === myChoice) {
    score += myScoring.score + 6;
  } else if (myScoring.equal === myChoice) {
    score += myScoring.score + 3;
  } else {
    score += myScoring.score + 0;
  }
}

console.log(score);
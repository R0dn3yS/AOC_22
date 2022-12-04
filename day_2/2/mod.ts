const text = Deno.readTextFileSync('../input.txt');
const textByLine = text.split('\n');

let score = 0;

const RPS: Record<string, Record<string, number>> = {
  'A': { 'X': 3, 'Y': 4, 'Z': 8 },
  'B': { 'X': 1, 'Y': 5, 'Z': 9 },
  'C': { 'X': 2, 'Y': 6, 'Z': 7 },
};

for (const game of textByLine) {
  score += RPS[game[0]][game[2]];
}

console.log(score);

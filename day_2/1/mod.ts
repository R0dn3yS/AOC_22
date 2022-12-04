const text = Deno.readTextFileSync('../input.txt');
const textByLine = text.split('\n');

let score = 0;

const RPS_C = [ 'A', 'B', 'C' ];
const RPC_U = [ 'X', 'Y', 'Z' ];

for (const line of textByLine) {
  const C = RPS_C.indexOf(line[0]);
  const U = RPC_U.indexOf(line[2]);

  score += U + 1;

  if (C === U) {
    score += 3;
  } else if ((U === 0 ? 'C' : (RPS_C[U - 1])) === RPS_C[C]) {
    score += 6;
  }
}

console.log(score);
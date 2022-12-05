const text = Deno.readTextFileSync('../input.txt');

const initState = text.split('\n\n')[0].split('\n');
const instructions = text.split('\n\n')[1].split('\n');

const positionsToCheck = [1, 5, 9, 13, 17, 21, 25, 29, 33];

const state: string[][] = [
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
];

function checkLength(): number {
  let i = 0;
  for (const line of initState) {
    if (line[1] === '1') break;
    i++;
  }
  return i;
}

for (let i = checkLength() - 1; i >= 0; i--) {
  for (const position of positionsToCheck) {
    const letter = initState[i][position];
    const posNum = positionsToCheck.indexOf(position);

    if (letter !== ' ') {
      state[posNum].push(letter);
    }
  }
}

for (const instruction of instructions) {
  const newInstruction = instruction.split(' ');

  const amount = parseInt(newInstruction[1]);
  const from = parseInt(newInstruction[3]);
  const to = parseInt(newInstruction[5]);

  for (let i = 0; i < amount; i++) {
    state[to - 1].push(state[from - 1].pop()!);
  }
}

let answer = '';

for (const stack of state) {
  answer += stack.pop();
}

console.log(answer);
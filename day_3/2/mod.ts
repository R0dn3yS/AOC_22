const text = Deno.readTextFileSync('../input.txt');
const textByLine = text.split('\n');

const priorities = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

let totalPrio = 0;

for (let index = 0; index <= textByLine.length - 3; index += 3) {
  const lineOne = textByLine[index];
  const lineTwo = textByLine[index + 1];
  const lineThree = textByLine[index + 2];

  for (const char of lineOne) {
    if (lineTwo.includes(char) && lineThree.includes(char)) {
      totalPrio += priorities.indexOf(char) + 1;
      break;
    }
  }
}

console.log(totalPrio);
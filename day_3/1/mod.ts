const text = Deno.readTextFileSync('../input.txt');
const textByLine = text.split('\n');

const priorities = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

let totalPrio = 0;

for (const line of textByLine) {

  const half1 = line.slice(0, line.length / 2);
  const half2 = line.slice(line.length / 2, line.length);

  for (const char of half1) {
    if (half2.includes(char)) {
      totalPrio += priorities.indexOf(char) + 1;
      break;
    }
  }
}

console.log(totalPrio);
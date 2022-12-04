const text = Deno.readTextFileSync('../input.txt');
const textByLine = text.split('\n');

let count = 0;

for (const line of textByLine) {
  const rangeOneString = line.split(',')[0];
  const rangeTwoString = line.split(',')[1];

  const rangeOne = [ parseInt(rangeOneString.split('-')[0]), parseInt(rangeOneString.split('-')[1]) ];
  const rangeTwo = [ parseInt(rangeTwoString.split('-')[0]), parseInt(rangeTwoString.split('-')[1]) ];

  const rangeOneArray = [];
  const rangeTwoArray = [];

  for (let i = rangeOne[0]; i <= rangeOne[1]; i++) {
    rangeOneArray.push(i);
  }

  for (let i = rangeTwo[0]; i <= rangeTwo[1]; i++) {
    rangeTwoArray.push(i);
  }

  let state = false;

  for (const i of rangeTwoArray) {
    if (rangeOneArray.includes(i)) {
      state = true;
    }
  }

  if (state) {
    count++;
  }
}

console.log(count);
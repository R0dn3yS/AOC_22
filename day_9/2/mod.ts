const input = Deno.readTextFileSync('../input.txt').split('\n');

const map = new Array(1000).fill(null).map((_) => new Array(1000).fill(' '));

const headPos = [500, 500];
const tailPos = [500, 500];
const prevPositions = [];

map[tailPos[0]][tailPos[1]] = '#';

for (const command of input) {
  const direction = command.split(' ')[0];
  const amount = parseInt(command.split(' ')[1]);

  switch (direction) {
    case 'U': {
      for (let a = 0; a < amount; a++) {
        headPos[0]--;

        if (!isTouching()) {
          tailPos[0]--;
          tailPos[1] = headPos[1];

          map[tailPos[0]][tailPos[1]] = '#';
        }

        console.log(`\nHead: ${headPos}`);
        console.log(`Tail: ${tailPos}`);
      }

      break;
    }

    case 'D': {
      for (let a = 0; a < amount; a++) {
        headPos[0]++;

        if (!isTouching()) {
          tailPos[0]++;
          tailPos[1] = headPos[1];

          

          map[tailPos[0]][tailPos[1]] = '#';
        }

        console.log(`\nHead: ${headPos}`);
        console.log(`Tail: ${tailPos}`);
      }

      break;
    }

    case 'L': {
      for (let a = 0; a < amount; a++) {
        headPos[1]--;

        if (!isTouching()) {
          tailPos[1]--;
          tailPos[0] = headPos[0];

          map[tailPos[0]][tailPos[1]] = '#';
        }

        console.log(`\nHead: ${headPos}`);
        console.log(`Tail: ${tailPos}`);
      }

      break;
    }

    case 'R': {
      for (let a = 0; a < amount; a++) {
        headPos[1]++;

        if (!isTouching()) {
          tailPos[1]++;
          tailPos[0] = headPos[0];

          map[tailPos[0]][tailPos[1]] = '#';
        }

        console.log(`\nHead: ${headPos}`);
        console.log(`Tail: ${tailPos}`);
      }

      break;
    }
  }
}

function isTouching(): boolean {
  const x = tailPos[0];
  const y = tailPos[1];

  let touching = false;

  if (x - 1 === headPos[0] && y - 1 === headPos[1]) touching = true;
  if (x - 1 === headPos[0] && y === headPos[1]) touching = true;
  if (x - 1 === headPos[0] && y + 1 === headPos[1]) touching = true;

  if (x === headPos[0] && y - 1=== headPos[1]) touching = true;
  if (x === headPos[0] && y === headPos[1]) touching = true;
  if (x === headPos[0] && y + 1 === headPos[1]) touching = true;

  if (x + 1 === headPos[0] && y - 1 === headPos[1]) touching = true;
  if (x + 1 === headPos[0] && y === headPos[1]) touching = true;
  if (x + 1 === headPos[0] && y + 1 === headPos[1]) touching = true;

  return touching;
}

let count = 0;
for (let x = 0; x < 1000; x++) {
  for (let y = 0; y < 1000; y++) {
    if (map[x][y] === '#') count++;
  }
}

console.log(count);
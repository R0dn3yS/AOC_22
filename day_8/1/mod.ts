const input = Deno.readTextFileSync('../input.txt').split('\n');

const SIZE = input.length;

const map = new Array(SIZE).fill(null).map((_) => new Array(SIZE).fill(0));

for (let x = 0; x < SIZE; x++) {
  for (let y = 0; y < SIZE; y++) {
    const treeNum = parseInt(input[x].split('')[y]);

    map[x][y] = treeNum;
  }
}

let visTrees = 0;

for (let x = 0; x < SIZE; x++) {
  for (let y = 0; y < SIZE; y++) {
    const treeNum = map[x][y];

    if (x === SIZE - 1 || x === 0 || y === SIZE - 1 || y === 0) {
      visTrees++;
    } else {

      // Check down
      let down = true;
      for (let i = x + 1; i < SIZE; i++) {
        if (map[i][y] >= treeNum) down = false;
      }

      // Check up
      let up = true;
      for (let i = x - 1; i >= 0; i--) {
        if (map[i][y] >= treeNum) up = false;
      }

      // Check right
      let right = true;
      for (let j = y + 1; j < SIZE; j++) {
        if (map[x][j] >= treeNum) right = false;
      }

      // Check left
      let left = true;
      for (let j = y - 1; j >= 0; j--) {
        if (map[x][j] >= treeNum) left = false;
      }

      if (down || up || right || left) {
        visTrees++;
      }
    }
  }
}

console.log(visTrees);
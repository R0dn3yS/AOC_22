const input = Deno.readTextFileSync('../input.txt').split('\n');

const SIZE = input.length;

const map = new Array(SIZE).fill(null).map((_) => new Array(SIZE).fill(0));

for (let x = 0; x < SIZE; x++) {
  for (let y = 0; y < SIZE; y++) {
    const treeNum = parseInt(input[x].split('')[y]);

    map[x][y] = treeNum;
  }
}

let scenicScore = 0;

for (let x = 0; x < SIZE; x++) {
  for (let y = 0; y < SIZE; y++) {
    const treeNum = map[x][y];

    let down = 0;
    let up = 0;
    let right = 0;
    let left = 0;

    if (x !== SIZE - 1) {
      for (let i = x + 1; i < SIZE; i++) {
        down++;
        if (map[i][y] >= treeNum) {
          break;
        }
      }
    }

    if (x !== 0) {
      for (let i = x - 1; i >= 0; i--) {
        up++
        if (map[i][y] >= treeNum) {
          break;
        }
      }
    }

    if (y !== SIZE - 1) {
      for (let j = y + 1; j < SIZE; j++) {
        right++;
        if (map[x][j] >= treeNum) {
          break;
        }
      }
    }

    if (y !== 0) {
      for (let j = y - 1; j >= 0; j--) {
        left++;
        if (map[x][j] >= treeNum) {
          break;
        }
      }
    }
  
    const thisScore = down * up * right * left;
    if (thisScore > scenicScore) scenicScore = thisScore;
  }
}

console.log(scenicScore);
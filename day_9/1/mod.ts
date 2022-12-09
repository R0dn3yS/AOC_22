const input = Deno.readTextFileSync('../input.txt').split('\n');

const len = 2;
const steps = input.map(line => line.split(' '));
const knots = new Array(len).fill(null).map(() => ({ x: 0, y: 0 }));
const visited = new Set([`0,0`]);

for (const [direction, count] of steps) {
  for (let i = 0; i < +count; i++) {
    if (direction === 'R') knots[0].x++;
    if (direction === 'L') knots[0].x--;
    if (direction === 'D') knots[0].y++;
    if (direction === 'U') knots[0].y--;

    for (let j = 1; j < knots.length; j++) {
      const [head, tail] = [knots[j - 1], knots[j]];

      if (Math.abs(head.x - tail.x) === 2 || Math.abs(head.y - tail.y) === 2) {
        if (head.x !== tail.x) {
          tail.x = head.x > tail.x ? tail.x + 1 : tail.x - 1;
        }

        if (head.y !== tail.y) {
          tail.y = head.y > tail.y ? tail.y + 1 : tail.y - 1;
        }
      }
    }
    visited.add(`${knots[len - 1].x},${knots[len - 1].y}`);
  }
}

console.log(visited.size);
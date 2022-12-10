const input = Deno.readTextFileSync('../input.txt').split('\n');
const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));

const cpu = {
  x: 1,
  pc: 0,
  curRow: 0,
  screen: new Array(6).fill(null).map((_) => new Array(40).fill('⬛')),
}

async function execute(opcode: string) {
  await delay(50);

  if (opcode === 'noop') {
    cycle();
  } else {
    cycle();
    cycle();

    const amount = parseInt(opcode.split(' ')[1]);
    cpu.x += amount;
  }
}

function cycle() {
  cpu.pc++;
  drawScreen([cpu.x - 1, cpu.x, cpu.x + 1]);
}

function drawScreen(spritePos: number[]) {
  const pos = (cpu.pc - 1) % 40;

  if (spritePos.includes(pos)) {
    cpu.screen[cpu.curRow][pos] = '⬜'
  }

  Deno.stdout.writeSync(new TextEncoder().encode(pos === 0 ? `\n${cpu.screen[cpu.curRow][pos]}` : `${cpu.screen[cpu.curRow][pos]}`));
  if (pos === 39) {
    cpu.curRow === 5 ? cpu.curRow = 0 : cpu.curRow++;
  }
}

for (const opcode of input) {
  await execute(opcode);
}
const input = Deno.readTextFileSync('../input.txt').split('\n');

const cpu = {
  x: 1,
  pc: 0,
  signal: 0,
}

function execute(opcode: string) {
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

  if ([20, 60, 100, 140, 180, 220].includes(cpu.pc)) {
    cpu.signal += cpu.pc * cpu.x;
  }
}

for (const opcode of input) {
  execute(opcode);
}

console.log(cpu.signal);